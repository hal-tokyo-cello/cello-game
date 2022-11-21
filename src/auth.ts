import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import "./main.css";

import App from "./App.vue";
import { routes as Auth } from "./views/Auth";
import { route as SignUp } from "./views/Auth/Signup.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: Auth.concat({ path: "/", redirect: SignUp.path }),
  strict: true,
});

createApp(App).use(router).use(PrimeVue).use(ToastService).mount("#app");
