import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import Index from "./views/Index.vue";
import Login from "./views/Login.vue"
import "primevue/resources/themes/fluent-light/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
//PrimeVue Import
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';



const routes: RouteRecordRaw[] = [
  { path: '/',name: 'index', component:  Index},
  { path: '/login',name: 'login', component:  Login},
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App)
app.use(router).use(PrimeVue).mount("#app");
app.component("InputText",InputText);
app.component("Password",Password);
app.component("Button",Button);
