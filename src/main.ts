import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "./main.css";

import App from "./App.vue";
import { routes as Auth } from "./views/Auth";
import { route as Avatar } from "./views/Avatar.vue";
import { route as Home, default as Index } from "./views/Index.vue";
import { routes as MyPage } from "./views/MyPage";
import { routes as Quests } from "./views/Quest";

const routes: RouteRecordRaw[] = [Auth, MyPage, Quests]
  .flat()
  .concat(Home, Avatar, { path: "/", component: Index });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});

createApp(App).use(router).use(PrimeVue).use(ToastService).mount("#app");
