import { RouteRecordRaw } from "vue-router";

import { route as Quest } from "./Quest.vue";
import { route as Overview } from "./QuestOverview.vue";

export const routes: RouteRecordRaw[] = [Quest, Overview];
