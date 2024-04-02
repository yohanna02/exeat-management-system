import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Student } from "@prisma/client";
import prisma from "~/server/db";

type StudentUser = Pick<Student, "regNo" | "password">;
const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    const body = await readBody<StudentUser>(event);

    if (!body.regNo || !body.password) {
        throw createError({
            statusCode: 422,
            message: "Registration Number and Password is required"
        });
    }

    const user = await prisma.student.findUnique({where: {regNo: body.regNo}});
    if (!user) {
        throw createError({
            statusCode: 401,
            message: "Registration Number or password is incorrect"
        });
    }
    
    const theSame = await bcrypt.compare(body.password, user.password);
    if (!theSame) {
        throw createError({
            statusCode: 401,
            message: "Registration Number or password is incorrect"
        });
    }

    const token = jwt.sign({id: user.id}, config.jwtSecret, {
        expiresIn: "2h"
    });

    setCookie(event, "token", `Bearer ${token}`);
    return {
        user: "student",
        regNo: body.regNo,
        requestRemaining: user.requestNoRemaining
    }
});