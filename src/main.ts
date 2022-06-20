import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import App from "./App.vue";

const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).use(PrimeVue).mount("#app");
