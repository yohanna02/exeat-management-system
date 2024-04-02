import type { Student } from "@prisma/client";
import type { responseType } from "~/interface";

type StudentType = Omit<Student, "password">;
export default () => {
    const useStudents = () => useState<StudentType[]>("students", () => []);
    const useRequests = () => useState<responseType["requests"]>("requests", () => []);

    const getStudents = () => useStudents().value;
    const setStudents = (newStudent: StudentType[]) => {
        const students = useStudents();
        students.value = newStudent;
    }

    const getRequests = () => useRequests().value;
    const setRequests = (newRequests: responseType["requests"]) => {
        const requests = useRequests();
        requests.value = newRequests;
    }

    return {
        getStudents,
        setStudents,
        getRequests,
        setRequests
    }
};