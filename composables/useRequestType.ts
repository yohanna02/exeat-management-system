
export default (type: "admin" | "student", student?: {
    regNo: string;
    name: string
}) => {
    if (type === "admin") {
        return `An exact request has been made by ${student?.name} (${student?.regNo})`;
    } else {
        return `You have made an exact request`;
    }
};