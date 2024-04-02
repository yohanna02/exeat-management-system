<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();
const admin = useAdmin();

if (route.path !== "/") {
  const { data, error } = await useFetch("/api/user");
  if (data.value !== null && !error.value) {
    if (data.value.user === "admin") {
      admin.setUser(data.value);
      router.push("/admin");
    } else if (data.value.user === "student") {
      admin.setUser(data.value);
      router.push("/student");
    }
  }
}
</script>
