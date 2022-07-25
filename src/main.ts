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
import ChangeAddr from "./views/ChangeAddr.vue";
import ChangePass from "./views/ChangePass.vue";
import Forget from "./views/Forget.vue";
import fourchoice from "./views/fourchoice.vue";
import Index from "./views/Index.vue";
import Mypage from "./views/Mypage.vue";
import Pairing from "./views/Pairing.vue";
import Quest from "./views/Quest.vue";
import Reset from "./views/Reset.vue";
import Secession from "./views/secession.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import Verification from "./views/Verification.vue";

const routes: RouteRecordRaw[] = [
  { path: "/index", name: "index", component: Index },
  { path: "/reset", name: "reset", component: Reset },
  { path: "/", name: "quest", component: Quest },
  { path: "/signin", name: "signin", component: Signin },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/verification", name: "varification", component: Verification },
  { path: "/mypage", name: "mypage", component: Mypage },
  { path: "/changepass", name: "changepass", component: ChangePass },
  { path: "/changeaddr", name: "changeaddr", component: ChangeAddr },
  { path: "/secession", name: "secession", component: Secession },
  { path: "/forget", name: "forget", component: Forget },
  { path: "/pairing", name: "pairing", component: Pairing },
  { path: "/fourchoice", name: "fourchoice", component: fourchoice },
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
