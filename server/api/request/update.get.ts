import { REQUEST_STATUS } from "@prisma/client";
import prisma from "../../db";

type Query = {
    response: "yes" | "no",
    requestId: string
};

export default defineEventHandler(async (event) => {
    const query = getQuery<Query>(event);

    if (!query.response) {
        throw createError({
            statusCode: 400,
            message: "Invalid request"
        });
    }

    const request = await prisma.request.findUnique({
        where: {
            id: query.requestId
        }
    });

    if (!request) {
        await sendRedirect(event, "/?status=error");
    } else if (query.response === "yes") {
        if (request.requestStatus !== REQUEST_STATUS.PENDING) {
            await sendRedirect(event, "/?status=not_pending");
            return;
        }
        const updatedRequest = await prisma.request.update({
            where: {
                id: query.requestId
            },
            data: {
                requestStatus: REQUEST_STATUS.ACCEPTED
            },
            include: {
                Student: {
                    select: {
                        name: true,
                        regNo: true
                    }
                }
            }
        });

        await sendRedirect(event, `/?status=yes&name=${updatedRequest.Student?.name}&regNo=${updatedRequest.Student?.regNo}`);
    } else if (query.response === "no") {
        if (request.requestStatus !== REQUEST_STATUS.PENDING) {
            await sendRedirect(event, "/?status=not_pending");
            return;
        }
        const updatedRequest = await prisma.request.update({
            where: {
                id: query.requestId
            },
            data: {
                requestStatus: REQUEST_STATUS.REJECTED
            },
            include: {
                Student: {
                    select: {
                        name: true,
                        regNo: true
                    }
                }
            }
        });

        await sendRedirect(event, `/?status=no&name=${updatedRequest.Student?.name}&regNo=${updatedRequest.Student?.regNo}`);
    } else {
        await sendRedirect(event, "/?status=error");
    }
});