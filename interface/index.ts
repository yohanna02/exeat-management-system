import type { REQUEST_STATUS, Request, Student } from "@prisma/client";

export enum REQUEST_TYPE {
    MAKE_REQUEST,
    REQUEST_ACCECPTED,
    REQUEST_REJECTED
};

export type responseType = {
    type: "admin" | "student";
    requests: ({
        Student: Pick<Student, "name" | "regNo"> | null;
    } & Request)[];
};