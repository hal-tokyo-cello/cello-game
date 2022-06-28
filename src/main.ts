import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import "primevue/resources/themes/fluent-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Mypage from "./views/Mypage.vue";

//PrimeVue Import
import Button from "primevue/button";

import App from "./App.vue";

const routes: RouteRecordRaw[] = [
  { path: "/mypage", name: "mypage", component: Mypage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router).use(PrimeVue).mount("#app");
app.component("Button", Button);
