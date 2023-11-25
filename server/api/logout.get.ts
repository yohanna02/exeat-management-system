export default defineEventHandler(async (event) => {
    setCookie(event, "token", "");

    return {
        message: "done"
    }
});