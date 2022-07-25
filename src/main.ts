import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";

import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/fluent-light/theme.css";

import App from "./App.vue";
import DeleteAccount from "./views/DeleteAccount.vue";
import Forget from "./views/Forget.vue";
import fourchoice from "./views/fourchoice.vue";
import Index from "./views/Index.vue";
import Mypage from "./views/Mypage.vue";
import Pairing from "./views/Pairing.vue";
import Quest from "./views/Quest.vue";
import Reset from "./views/Reset.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import UpdateUserInfo from "./views/UpdateUserInfo.vue";
import UpdateUserPassword from "./views/UpdateUserPassword.vue";
import Verification from "./views/Verification.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "quest", component: Quest },
  { path: "/deleteaccount", name: "secession", component: DeleteAccount },
  { path: "/forget", name: "forget", component: Forget },
  { path: "/fourchoice", name: "fourchoice", component: fourchoice },
  { path: "/index", name: "index", component: Index },
  { path: "/mypage", name: "mypage", component: Mypage },
  { path: "/mypage/password", component: UpdateUserPassword },
  { path: "/mypage/update", name: "changeaddr", component: UpdateUserInfo },
  { path: "/pairing", name: "pairing", component: Pairing },
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
