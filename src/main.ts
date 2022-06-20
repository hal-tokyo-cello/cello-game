import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import App from "./App.vue";
import Index from "./views/Index.vue";
import Login from "./views/Login.vue"


const routes: RouteRecordRaw[] = [
  { path: '/',name: 'index', component:  Index},
  { path: '/login',name: 'login', component:  Login},
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).use(PrimeVue).mount("#app");
