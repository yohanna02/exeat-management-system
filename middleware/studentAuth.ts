export default defineNuxtRouteMiddleware((to, from) => {
    const { getUser } = useAdmin();
    const user = getUser();
    if (!user) {
      return navigateTo('/student/login');
    }

    if (user.user !== "student") {
      return navigateTo('/student/login');
    }
});