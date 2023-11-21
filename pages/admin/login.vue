<template>
    <div class="bg-gray-100">
        <div class="min-h-screen flex items-center justify-center">
            <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div class="flex justify-center mb-8">
                <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-30 h-20">
                </div>
                <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Admin Login</h1>
                <form>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
                    </div>
                    <button type="submit" class="w-32 bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>