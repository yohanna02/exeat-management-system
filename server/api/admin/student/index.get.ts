import prisma from "~/server/db";

export default defineEventHandler(async (event) => {
    const students = await prisma.student.findMany({
        select: {
            email: true,
            parentEmail: true,
            id: true,
            name: true,
            regNo: true
        }
    });

    return students;
});