import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import "primevue/resources/themes/fluent-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import ChangePass from "./views/ChangePass.vue";

//PrimeVue Import
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

import App from "./App.vue";

const routes: RouteRecordRaw[] = [
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
