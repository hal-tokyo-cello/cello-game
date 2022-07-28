import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "./theme.css";
import "./main.css";

import App from "./App.vue";
import { routes as Auth } from "./views/Auth";
import { route as Home } from "./views/Index.vue";
import { routes as MyPage } from "./views/MyPage";
import { routes as Quests } from "./views/Quest";
import { route as Reset } from "./views/Reset.vue";

const routes: RouteRecordRaw[] = [Auth, MyPage, Quests]
  .flat()
  .concat(Home, Reset);

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});

createApp(App).use(router).use(PrimeVue).mount("#app");
