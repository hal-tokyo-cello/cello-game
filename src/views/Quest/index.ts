import { RouteRecordRaw } from "vue-router";

import { default as Quest, route as QuestRoute } from "./Quest.vue";
import {
  default as Overview,
  route as OverviewRoute,
} from "./QuestOverview.vue";

export const routes: RouteRecordRaw[] = [QuestRoute, OverviewRoute];

export const components = {
  Quest,
  Overview,
};
