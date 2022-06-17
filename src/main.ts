import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import PrimeVue from "primevue/config";

import App from "./App.vue";

const routes = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).use(PrimeVue).mount("#app");
