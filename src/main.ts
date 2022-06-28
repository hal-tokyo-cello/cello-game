import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import "primevue/resources/themes/fluent-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import Secession from "./views/secession.vue";

const routes: RouteRecordRaw[] = [
  { path: "/secession", name: "secession", component: Secession },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router).use(PrimeVue).mount("#app");
