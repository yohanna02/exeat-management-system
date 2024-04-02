<template>
    <div class="bg-gray-100">
        <div class="min-h-screen flex items-center justify-center">
            <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Student Login</h1>
                <NuxtLink to="/" class="underline mb-5 block">Home</NuxtLink>
                <p class="bg-red-300 p-3 mb-4 rounded-md text-white" v-if="error">{{error}}</p>
                <form @submit.prevent="login">
                    <div class="mb-6">
                        <label for="regNo" class="block mb-2 text-sm text-gray-600">Registration Number</label>
                        <input v-model="regNo" type="text" id="regNo" name="regNo" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm text-gray-600">Password</label>
                        <input v-model="password" type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
                    </div>
                    <button :disabled="loading" type="submit" class="w-32 bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">{{ loading ? "Loading..." : "Login" }}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const student = useStudent();
const router = useRouter();

const regNo = ref("");
const password = ref("");

const error = ref(null);
const loading = ref(false);

const login = async () => {
    try {
        loading.value = true;
        error.value = null;
        await student.login({regNo: regNo.value, password: password.value});
        
        router.push("/student");
    } catch(err: any) {
        loading.value = false;
        error.value = err.data.message;
    }
};
</script>