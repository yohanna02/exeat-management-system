<template>
    <main class="bg-gray-300 w-full h-full flex justify-center items-center">
        <form @submit.prevent="makeExeatRequest" class="bg-white w-full md:w-1/2 h-full md:h-fit p-5 rounded-md">
            <h3 class="text-center font-bold">Make Request</h3>

            <div class="flex flex-col">
                <label for="exeat-reason">Reason</label>
                <textarea v-model="reason" id="exeat-reason" class="border-2 border-gray-500 rounded-md p-2 h-60"></textarea>
            </div>

            <button :disabled="loading" type="submit" class="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4 mb-6">
                {{loading ? "Loading..." : "Make Request"}}
            </button>
        </form>
    </main>
</template>

<script lang="ts" setup>

const loading = ref(false);
const reason = ref("");

async function makeExeatRequest() {
    loading.value = true;
    const data = await $fetch<{message: string}>("/api/request", {
        method: "POST",
        body: { reason: reason.value }
    });

    alert(data.message);
    loading.value = false;
    reason.value = "";
}
</script>
