import jwt from "jsonwebtoken";
import sendMail from "../../utils/mail/send-mail";
import prisma from "~/server/db";
import { REQUEST_STATUS, Student } from "@prisma/client";
import { REQUEST_TYPE } from "~/interface";

export default defineEventHandler(async (event) => {
    const token = getCookie(event, "token");

    if (!token) {
        throw createError({
            statusCode: 401,
            message: "Not logged in"
        });
    }

    try {
        const decoded: any = jwt.decode(token.split(" ")[1]);

        const studentId = decoded.id;
        const student = await prisma.student.findUnique({ where: { id: studentId } });

        if (!student) {
            throw new Error("auth_error");
        }

        const body = await readBody(event) as { reason: string };

        if (!body.reason) {
            throw new Error("reason_error");
        }

        await makeRequest(student, body);
        return {
            message: "Successfully made an exeact request."
        }
    } catch (error: any) {
        console.log(error);
        if (error instanceof Error && error.message === "auth_error") {
            throw createError({
                statusCode: 401,
                statusText: "user not logged in"
            });
        } else if (error instanceof Error && error.message === "reason_error") {
            throw createError({
                statusCode: 422,
                statusText: "Reason field is required"
            });
        } else if (error instanceof Error && error.message === "request_no_remaining_error") {
            throw createError({
                statusCode: 422,
                statusText: "You have reached the maximum number of requests"
            });
        } else {
            throw createError({
                statusCode: 500,
                statusText: "Internal server error"
            });
        }
    }

    /* const data = await (function () {
        return new Promise(function (resolve, reject) {
            jwt.verify(token.split(" ")[1], config.jwtSecret, async (err, decoded: any) => {
                if (err) {
                    throw createError({
                        statusCode: 401,
                        message: "user not logged in"
                    });
                }

                const studentId = decoded.id;
                const student = await prisma.student.findUnique({ where: { id: studentId } });

                if (!student) {
                    throw createError({
                        statusCode: 401,
                        message: "user not logged in"
                    });
                }

                const body = await readBody(event) as { reason: string };

                if (!body.reason) {
                    throw createError({
                        statusCode: 422,
                        message: "Reason field is required"
                    });
                }
                const request = await prisma.request.create({
                    data: {
                        studentId: student.id,
                        message: body.reason,
                        requestStatus: REQUEST_STATUS.PENDING
                    }
                });
                await sendMail(REQUEST_TYPE.MAKE_REQUEST, student, request.id, body.reason);
                resolve({
                    message: "Successfully made an exeact request."
                });
            });
        })
    })(); */
    // return data;
});

function makeRequest(student: Student, body: { reason: string }) {
    return prisma.$transaction(async function(tx) {
        const request = await tx.request.create({
            data: {
                studentId: student.id,
                message: body.reason,
                requestStatus: REQUEST_STATUS.PENDING
            }
        });
        if (student.requestNoRemaining === 0) {
            throw Error("request_no_remaining_error");
        }
        await tx.student.update({
            where: { id: student.id },
            data: {
                requestNoRemaining: {
                    decrement: 1
                }
            }
        });
        await sendMail(REQUEST_TYPE.MAKE_REQUEST, student, request.id, body.reason);
    });
}