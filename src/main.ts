import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import "primevue/resources/themes/fluent-light/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import App from "./App.vue";

const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App)
app.use(router).use(PrimeVue).mount("#app");
