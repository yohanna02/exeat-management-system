<template>
  <span
    v-show="!open"
    class="md:hidden absolute text-white text-4xl top-5 left-4 cursor-pointer z-50"
    @click="openSidebar"
  >
    <Bars3Icon
      class="block h-10 w-10 bi bi-filter-left px-2 bg-gray-900 rounded-md"
    />
  </span>
  <TabGroup vertical>
    <div
      class="flex fixed top-0 bottom-0 left-0 right-0 overflow-hidden h-screen"
    >
      <TabList class="w-fit">
        <div
          v-show="open"
          class="h-full p-2 absolute md:static w-full md:w-[300px] lg:w-[25rem] overflow-y-auto text-center bg-gray-900"
        >
          <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center justify-between">
              <h1 class="font-bold text-gray-200 text-[15px] ml-3">
                Student Dashboard
              </h1>
              <XMarkIcon
                class="w-10 cursor-pointer ml-28 lg:hidden"
                @click="openSidebar"
              />
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          <Tab as="template" v-slot="{ selected }">
            <div
              class="w-full p-2.5 mt-3 flex justify-between items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              :class="[selected && 'bg-blue-600']"
            >
              <span class="flex align-center">
                <HomeIcon class="w-6" />
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Home</span
                >
              </span>
              <span
                v-if="requestNo > 0"
                class="center select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
              >
                {{ requestNo }}
              </span>
            </div>
          </Tab>

          <Tab as="template" v-slot="{ selected }">
            <div
              class="w-full p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              :class="[selected && 'bg-blue-600']"
            >
              <span class="flex align-center">
                <PlusIcon class="w-6" />
                <span class="text-[15px] ml-4 text-gray-200 font-bold"
                  >Request</span
                >
              </span>
            </div>
          </Tab>

          <div class="my-4 bg-gray-600 h-[1px]"></div>
          <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            @click="logout"
          >
            <ArrowRightIcon class="w-6" />
            <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </div>
      </TabList>

      <TabPanels class="w-full h-full overflow-scroll">
        <NuxtErrorBoundary>
            <TabPanel>
                <UiRequest />
            </TabPanel>
            <TabPanel class="h-full">
                <UiExeatForm />
            </TabPanel>

            <template #error="{ error }">
                <div class="flex flex-col h-full text-center justify-center items-center">
                    <h1 class="text-5xl text-red-400 mb-4">Sorry, something went wrong</h1>
                    <code>{{ error }}</code>

                    <button class="text-white bg-gray-900 px-10 py-3 rounded-md mt-4 w-fit" @click="error.value = null">
                        Go Back
                    </button>
                </div>
            </template>
        </NuxtErrorBoundary>
      </TabPanels>
    </div>
  </TabGroup>
</template>

<script lang="ts" setup>
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { REQUEST_STATUS } from "@prisma/client";

const router = useRouter();
const open = ref(true);

const { getRequests } = useStore();
const requestNo = computed(() => getRequests().filter(request => request.requestStatus === REQUEST_STATUS.PENDING).length);

function openSidebar() {
  //   document.querySelector(".sidebar").classList.toggle("hidden");
  open.value = !open.value;
}

const logout = async () => {
  await $fetch("/api/logout");

  router.push("/admin/login");
}

definePageMeta({
  middleware: "student-auth",
});
</script>
