import prisma from "~/server/db";

export default defineEventHandler(async (event) => {
    const student = await prisma.student.findUnique({where: {id: event.context.params?.id}});

    if (!student) {
        throw createError({
            statusCode: 404,
            message: "Student not found"
        });
    }

    return student;
});
