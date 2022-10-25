import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import "./main.css";

import App from "./App.vue";
import { route as Avatar } from "./views/Avatar.vue";
import { routes as MyPage } from "./views/MyPage";
import { routes as Quests } from "./views/Quest";
import { route as Overview } from "./views/Quest/QuestOverview.vue";
import { verifiedUser } from "./views/Auth/Verification.vue";

// validate login state
if (localStorage.getItem(verifiedUser) == null) {
  window.location.href = `${window.location.origin}/auth.html`;
}

const routes: RouteRecordRaw[] = [MyPage, Quests]
  .flat()
  .concat(Avatar, { path: "/", redirect: Overview.path });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});

createApp(App).use(router).use(PrimeVue).use(ToastService).mount("#app");
