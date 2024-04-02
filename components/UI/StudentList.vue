<template>
  <main class="w-full h-full">
    <div class="overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        v-if="students.length > 0"
      >
        <thead
          class="text-xs text-black uppercase bg-white border-b border-gray-900"
        >
          <tr>
            <th scope="col" class="p-4">Full Name</th>
            <th scope="col" class="px-6 py-3">Registration No</th>
            <th scope="col" class="px-6 py-3">Request remaining</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Parent Email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b border-gray-700 text-gray-900"
            v-for="student in students"
            :key="student.id"
          >
            <td class="px-6 py-4">
              {{ student.name }}
            </td>
            <th class="px-6 py-4">
              {{ student.regNo }}
            </th>
            <td class="px-6 py-4">{{ student.requestNoRemaining }}</td>
            <td class="px-6 py-4">{{ student.email }}</td>
            <td class="px-6 py-4">{{ student.parentEmail }}</td>
            <td class="px-6 py-4">
              <button
                @click="resetRequest($event, student.id)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-center font-bold text-3xl mt-20" v-else>
        No Student Registered.
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { getStudents, setStudents } = useStore();

const students = computed(() => getStudents());

async function resetRequest(e: any, studentId: string) {
  e.target.textContent = "Resetting...";
  const data = await $fetch(`/api/request/reset?studentId=${studentId}`);
  const studentData = await $fetch("/api/admin/student");

  setStudents(studentData);
  e.target.textContent = "Reset";
  alert(data.message);
}
</script>
