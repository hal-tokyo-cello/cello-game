import PrimeVue from "primevue/config";
import { createApp } from "vue";

import "./main.css";
import "./theme.css";

import Index from "./views/Index.vue";

createApp(Index).use(PrimeVue).mount("#app");
