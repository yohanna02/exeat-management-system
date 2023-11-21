import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Admin } from "@prisma/client";
import prisma from "~/server/db";

type AdminUser = Omit<Admin, "id">;
export default defineEventHandler(async (event) => {
    const body = await readBody<AdminUser>(event);

    if (!body.email || !body.password) {
        throw createError({
            statusCode: 422,
            message: "Email and Password is required"
        });
    }

    const user = await prisma.admin.findUnique({where: {email: body.email}});
    if (!user) {
        throw createError({
            statusCode: 401,
            message: "Email or password is incorrect"
        });
    }
    
    const theSame = await bcrypt.compare(body.password, user.password);
    if (!theSame) {
        throw createError({
            statusCode: 401,
            message: "Email or password is incorrect"
        });
    }

    const token = jwt.sign({id: user.id}, "sdjvbsdjjkdsjkvbsnskdvksd", {
        expiresIn: "2h"
    });

    setCookie(event, "token", `Bearer ${token}`);
    return {
        user: user.email
    }
});