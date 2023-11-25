export default defineNuxtRouteMiddleware((to, from) => {
    const { getUser } = useAdmin();
    const user = getUser();
    if (!user) {
      return navigateTo('/admin/login');
    }

    if (user.user !== "admin") {
      return navigateTo('/admin/login');
    }
});