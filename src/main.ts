import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "./main.css";
import "./theme.css";

import App from "./App.vue";
import { routes as Auth } from "./views/Auth";
import { route as Avatar } from "./views/Avatar.vue";
import { route as Home } from "./views/Index.vue";
import { routes as MyPage } from "./views/MyPage";
import { routes as Quests } from "./views/Quest";

const routes: RouteRecordRaw[] = [Auth, MyPage, Quests]
  .flat()
  .concat(Home, Avatar);

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});

createApp(App).use(router).use(PrimeVue).use(ToastService).mount("#app");
