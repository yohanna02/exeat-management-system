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
                Admin Dashboard
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
                class="center select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
              >
                3
              </span>
            </div>
          </Tab>

          <Tab as="template" v-slot="{ selected }">
            <div
              class="w-full p-2.5 mt-3 flex justify-between items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              :class="[selected && 'bg-blue-600']"
            >
              <span class="flex align-center">
                <UserIcon class="w-6" />
                <span class="text-[15px] ml-4 text-gray-200 font-bold"
                  >Students</span
                >
              </span>
              <span
                class="center select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
              >
                30
              </span>
            </div>
          </Tab>

          <Tab as="template" v-slot="{selected}">
            <div
              class="w-full p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              :class="[selected && 'bg-blue-600']"
            >
              <span class="flex align-center">
                <PlusIcon class="w-6" />
                <span class="text-[15px] ml-4 text-gray-200 font-bold"
                  >Add Student</span
                >
              </span>
            </div>
          </Tab>

          <div class="my-4 bg-gray-600 h-[1px]"></div>
          <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <ArrowRightIcon class="w-6" />
            <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </div>
      </TabList>

      <TabPanels class="w-full h-full overflow-scroll">
        <TabPanel>
          <UiNotifications />
        </TabPanel>
        <TabPanel class="w-full h-full">
          <UiStudentList />
        </TabPanel>
        <TabPanel class="h-full">
          <UiAddStudent />
        </TabPanel>
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
  UserIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const open = ref(true);

function openSidebar() {
  //   document.querySelector(".sidebar").classList.toggle("hidden");
  open.value = !open.value;
}
</script>
