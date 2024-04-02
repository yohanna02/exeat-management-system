import jwt from "jsonwebtoken";
import prisma from "~/server/db";

export default defineEventHandler(async (event) => {
    const token = getCookie(event, "token");
    const query = getQuery<{studentId: string}>(event);

    if (!token) {
        throw createError({
            statusCode: 401,
            message: "Not logged in"
        });
    }

    try {
        const decoded: any = jwt.decode(token.split(" ")[1]);

        const adminId = decoded.id;
        const admin = await prisma.admin.findUnique({ where: { id: adminId } });

        if (!admin) {
            throw new Error("auth_error");
        }

        await prisma.student.update({
            where: {
                id: query.studentId
            },
            data: {
                requestNoRemaining: 3
            }
        });

        return {
            message: "Successfully reset the request number"
        };
    } catch (error: any) {
        if (error instanceof Error && error.message === "auth_error") {
            throw createError({
                statusCode: 401,
                statusText: "user not logged in"
            });
        } else {
            throw createError({
                statusCode: 500,
                statusText: "Internal server error"
            });
        }
    }
});