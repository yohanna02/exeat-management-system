import type { Student } from "@prisma/client";

type StudentType = Omit<Student, "password">;
export default () => {
    const useStudents = () => useState<StudentType[]>("students", () => []);

    const getStudents = () => useStudents().value;
    const setStudents = (student: StudentType[]) => {
        const students = useStudents();
        students.value = student;
    }

    return {
        getStudents,
        setStudents
    }
};