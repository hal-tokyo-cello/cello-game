import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import "primevue/resources/themes/fluent-light/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import App from "./App.vue";
import Forget from "./views/Forget.vue"
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const routes: RouteRecordRaw[] = [
  { path: "/forget", name: "forget", component: Forget }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App)
app.use(router).use(PrimeVue).mount("#app");
app.component("InputText", InputText);
app.component("Button", Button);