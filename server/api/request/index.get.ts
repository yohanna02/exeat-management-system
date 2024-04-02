import jwt from "jsonwebtoken";
import prisma from "../../db";

export default defineEventHandler(async (event) => {
    const token = getCookie(event, "token");
    const config = useRuntimeConfig();

    if (!token) {
        throw createError({
            statusCode: 401,
            message: "Not logged in"
        });
    }

    const decoded = jwt.verify(token.split(" ")[1], config.jwtSecret) as { id: string };

    const admin = await prisma.admin.findUnique({ where: { id: decoded.id } });
    if (admin) {
        const requests = await prisma.request.findMany({
            include: {
                Student: {
                    select: {
                        name: true,
                        regNo: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return {type: "admin", requests};
    }

    const student = await prisma.student.findUnique({ where: { id: decoded.id } });
    if (student) {
        const requests = await prisma.request.findMany({
            where: {
                studentId: student.id
            },
            include: {
                Student: {
                    select: {
                        name: true,
                        regNo: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return {type: "student", requests};
    }

    throw createError({
        statusCode: 401,
        message: "Not logged in"
    });
});