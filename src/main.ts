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
import Index from "./views/Index.vue";
import Mypage from "./views/Mypage.vue";
import Quest from "./views/Quest.vue";
import Reset from "./views/Reset.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import Varification from "./views/Varification.vue";
import ChangeName from "./views/ChangeName.vue";
import ChangePass from "./views/ChangePass.vue";

const routes: RouteRecordRaw[] = [
  { path: "/index", name: "index", component: Index },
  { path: "/reset", name: "reset", component: Reset },
  { path: "/", name: "quest", component: Quest },
  { path: "/signin", name: "signin", component: Signin },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/varification", name: "varification", component: Varification },
  { path: "/mypage", name: "mypage", component: Mypage },
  { path: "/changename", name: "changename", component: ChangeName },
  { path: "/changepass", name: "changepass", component: ChangePass },
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
