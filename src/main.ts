import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).use(PrimeVue).mount("#app");
