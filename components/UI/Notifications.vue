<template>
  <main class="mt-5">
    <h2 class="pl-3 font-bold text-lg">Request</h2>
    <div class="flex justify-between items-center mt-5 px-3">
      <button
        @click="() => refresh()"
        class="text-sm font-semibold leading-6 text-blue-500"
      >
        Refresh
      </button>
    </div>
    <p class="text-center mt-5 text-2xl" v-if="pending">Loading...</p>
    <p class="text-center mt-5 text-2xl" v-else-if="error">
      Error Fetching Notifications
    </p>
    <ul role="list" class="divide-y divide-gray-100 px-5 mt-5" v-else-if="data">
      <li
        v-for="request in data?.requests"
        :key="request.id"
        class="flex justify-between gap-x-6 py-5"
      >
        <div class="flex min-w-0 gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ useRequestType(data.type, request.Student!) }}
            </p>
            <div>
              <p>{{request.message}}</p>
            </div>
          </div>
        </div>
        <div class="shrink-0 sm:flex flex-col">
          <p class="mt-1 text-xs leading-5 text-gray-500">
            <time :datetime="request.createdAt">{{
              timeAgo.format(new Date(request.createdAt))
            }}</time>
          </p>
          <p>Status: <span class="font-bold" :class="statusColor(request.requestStatus)">{{ request.requestStatus }}</span></p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { REQUEST_STATUS } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

type responseType = {
  type: "admin" | "student";
  requests: ({
    Student: {
      regNo: string;
      name: string;
    } | null;
  } & {
    id: string;
    message: string;
    requestStatus: REQUEST_STATUS;
    studentId: string | null;
    createdAt: string;
  })[];
};

const statusColor = (status: REQUEST_STATUS) => {
  switch (status) {
    case REQUEST_STATUS.ACCEPTED:
      return "text-green-500";
    case REQUEST_STATUS.REJECTED:
      return "text-red-500";
    case REQUEST_STATUS.PENDING:
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
};

const { data, pending, error, refresh } = await useFetch<responseType>("/api/request");
</script>
