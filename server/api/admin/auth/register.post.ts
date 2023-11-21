import bcrypt from "bcrypt";

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

    const userExist = await prisma.admin.findUnique({where: {email: body.email}});
    if (userExist) {
        throw createError({
            status: 404,
            message: "Email already used"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    await prisma.admin.create({
        data: {
            email: body.email,
            password: hashedPassword
        }
    });

    return {
        message: "Created user successfully"
    }
});
