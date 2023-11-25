export default () => {
    const useUser = () => useState<any>("user", () => null);

    const setUser = (newUser: any) => {
        const user = useUser();
        user.value = newUser;
    }
    const getUser = () => useUser().value;

    const login = async (data: {email: string, password: string}) => {
        const user = await $fetch("/api/admin/auth/login", {
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