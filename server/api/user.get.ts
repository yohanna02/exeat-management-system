import jwt from "jsonwebtoken";
import prisma from "../db";

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    const token = getCookie(event, "token");

    if (!token) {
        throw createError({
            statusCode: 401,
            message: "Not logged in"
        });
    }
    
    try {
        const decoded = jwt.verify(token.split(" ")[1], config.jwtSecret) as { id: string };
        
        const admin = await prisma.admin.findUnique({where: { id:decoded.id }});
        if (admin) {
            return {user: "admin", email: admin.email};
        }
        
        const student = await prisma.student.findUnique({where: { id: decoded.id }});
        if (student) {
            return {user: "student", email: student.email};
        }

        return {user: null, email: null};
    } catch(err) {
        throw createError({
            statusCode: 401,
            message: "Not logged in"
        });
    }
});