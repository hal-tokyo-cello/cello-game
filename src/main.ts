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
import DeleteAccount from "./views/DeleteAccount.vue";
import Forget from "./views/Forget.vue";
import Index from "./views/Index.vue";
import Mypage from "./views/Mypage.vue";
import QuestOverview from "./views/Quest/QuestOverview.vue";
import Reset from "./views/Reset.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import UpdateUserInfo from "./views/UpdateUserInfo.vue";
import UpdateUserPassword from "./views/UpdateUserPassword.vue";
import Verification from "./views/Verification.vue";

const routes: RouteRecordRaw[] = [
  { path: "/deleteaccount", name: "secession", component: DeleteAccount },
  { path: "/forget", name: "forget", component: Forget },
  { path: "/index", name: "index", component: Index },
  { path: "/mypage", name: "mypage", component: Mypage },
  { path: "/mypage/password", component: UpdateUserPassword },
  { path: "/mypage/update", name: "changeaddr", component: UpdateUserInfo },
  { path: "/quests", name: "quest", component: QuestOverview },
  { path: "/reset", name: "reset", component: Reset },
  { path: "/signin", name: "signin", component: Signin },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/verification", name: "varification", component: Verification },
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
