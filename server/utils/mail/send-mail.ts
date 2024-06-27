import { Student } from "@prisma/client";
import nodemailer from "nodemailer";
import mail from "./mail";
import { REQUEST_TYPE } from "~/interface";

const config = useRuntimeConfig();

const mailTransport = () => {
    return nodemailer.createTransport({
        host: config.contactMailHost,
        port: parseInt(config.contactMailPort),
        secure: true,
        auth: {
            user: config.contactMailUser,
            pass: config.contactMailPass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
}

export default async (requestType: REQUEST_TYPE, student: Student, requestId: string, message?: string) => {
    switch (requestType) {
        case REQUEST_TYPE.MAKE_REQUEST:
            const transport = mailTransport();
            await transport.sendMail({
                to: student.parentEmail,
                from: config.contactMailUser,
                subject: `Exeact request from ${student.name}`,
                html: mail(student.name, requestId, message!)
            });
            break;
    }
}
