export default () => {
    const useUser = () => useState<any>("user", () => null);

    const setUser = (newUser: any) => {
        const user = useUser();
        user.value = newUser;
    }
    const getUser = () => useUser().value;

    const login = async (data: {regNo: string, password: string}) => {
        const user = await $fetch("/api/student/auth/login", {
            method: "POST",
            body: data
        });

        setUser(user);
    }

    return {
        getUser,
        setUser,
        login
    }
}