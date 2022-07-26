import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";

import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "./theme.css";

import App from "./App.vue";
import { routes as Auth } from "./views/Auth";
import Index from "./views/Index.vue";
import { routes as MyPage } from "./views/MyPage";
import { routes as Quests } from "./views/Quest";
import Reset from "./views/Reset.vue";

const routes: RouteRecordRaw[] = [
  ...Auth,
  ...MyPage,
  ...Quests,
  { path: "/home", component: Index },
  { path: "/resetpassword", component: Reset },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router).use(PrimeVue).mount("#app");
app.component("InputText", InputText);
app.component("Password", Password);
app.component("Button", Button);
app.component("TheButton", Button);
