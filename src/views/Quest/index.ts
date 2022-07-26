import { RouteRecordRaw } from "vue-router";

import Quests from "./QuestOverview.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/quests", component: Quests },
];
