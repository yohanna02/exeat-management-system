<template>
    <main class="bg-gray-300 w-full h-full flex justify-center items-center">
        <form @submit.prevent="registerStudent" class="bg-white w-full md:w-1/2 h-full md:h-fit p-5 rounded-md">
            <h3 class="text-center font-bold">Add Student</h3>

            <div class="flex flex-col">
                <label for="full-name">Full Name</label>
                <input type="text" v-model="fullName" id="full-name" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="reg-no">Registration Number</label>
                <input type="text" v-model="regNo" id="reg-no" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="student-email">Student Email</label>
                <input type="email" v-model="studentEmail" id="student-email" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="parent-email">Parent Email</label>
                <input type="email" v-model="parentEmail" id="parent-email" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="student-password">Student Password</label>
                <input type="password" v-model="studentPassword" id="student-password" class="border-2 border-gray-500 rounded-md p-2" />
            </div>

            <button :disabled="loading" type="submit" class="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4 mb-6">{{loading ? "Loading..." : "Register"}}</button>
        </form>
    </main>
</template>

<script lang="ts" setup>

const {setStudents} = useStore();

const loading = ref(false);

const fullName = ref("");
const regNo = ref("");
const studentEmail = ref("");
const parentEmail = ref("");
const studentPassword = ref("");

const registerStudent = async () => {
    loading.value = true;
    try {
        const data = await $fetch("/api/admin/student", {
            method: "POST",
            body: {
                regNo: regNo.value,
                name: fullName.value,
                email: studentEmail.value,
                password: studentPassword.value,
                parentEmail: parentEmail.value
            }
        });
        
        alert(data.message);
        loading.value = false;
        regNo.value = "";
        fullName.value = "";
        studentEmail.value = "";
        studentPassword.value = "";
        parentEmail.value = "";

        const studentData = await $fetch("/api/admin/student");

        setStudents(studentData);
    } catch (err: any) {
        loading.value = false;
        throw createError({
            statusCode: err.data.statusCode,
            message: err.data.message
        });
    }
}
</script>
