import { Student } from "@prisma/client";
import prisma from "~/server/db";

type StudentBody = Omit<Student, "id">;
export default defineEventHandler(async (event) => {
    const body = await readBody<StudentBody>(event);

    if (!body.email || !body.name || !body.parentEmail || !body.password || !body.regNo) {
        throw createError({
            statusCode: 422,
            message: "Email and Password is required"
        });
    }

    const student = await prisma.student.findUnique({where: {regNo: body.regNo}});
    if (student) {
        throw createError({
            statusCode: 422,
            message: "Student registration number alread used"
        });
    }

    await prisma.student.create({
        data: {
            email: body.email,
            parentEmail: body.parentEmail,
            name: body.name,
            password: body.password,
            regNo: body.regNo
        }
    });

    return {
        message: "Created student account successfully"
    }
});
