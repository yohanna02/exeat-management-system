<template>
    <main class="bg-gray-300 w-full h-full flex justify-center items-center">
        <form class="bg-white w-full md:w-1/2 h-full md:h-fit p-5 rounded-md">
            <h3 class="text-center font-bold">Add Student</h3>

            <div class="flex flex-col">
                <label for="full-name">Full Name</label>
                <input type="text" id="full-name" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="reg-no">Registration Number</label>
                <input type="text" id="reg-no" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="student-email">Student Email</label>
                <input type="email" id="student-email" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="parent-email">Parent Email</label>
                <input type="email" id="parent-email" class="border-2 border-gray-500 rounded-md p-2" />
            </div>
            <div class="flex flex-col mt-5">
                <label for="student-password">Student Password</label>
                <input type="password" id="student-password" class="border-2 border-gray-500 rounded-md p-2" />
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4 mb-6">Register</button>
        </form>
    </main>
</template>