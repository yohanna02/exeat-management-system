<template>
    <div class="h-screen flex flex-col justify-center items-center" v-if="error">
        <h1 class="font-bold text-6xl text-center">{{ error.statusCode }}</h1>
        <p class="text-center text-lg">{{ error.message }}</p>

        <button class="bg-gray-900 text-white p-3 rounded-md" @click="goHome">Home</button>
    </div>
</template>

<script lang="ts" setup>
const error = useError();

const goHome = () => {
    clearError({
        redirect: "/"
    });
}
</script>