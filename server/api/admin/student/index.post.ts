import bcrypt from "bcrypt";
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
            message: "Student registration number already used"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    await prisma.student.create({
        data: {
            email: body.email,
            parentEmail: body.parentEmail,
            name: body.name,
            password: hashedPassword,
            regNo: body.regNo,
            requestNoRemaining: 3
        }
    });

    return {
        message: "Created student account successfully"
    }
});
