<template></template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { getQuest, QuestSummary } from "../../util/api/quest";

/**
 * Name of route param for quest id.
 */
export const questRouteParam = "quest";

const component = defineComponent({
  data: () => ({
    quest: {} as QuestSummary,
  }),
  mounted() {
    const questId = this.$route.params[questRouteParam] as string;
    if (typeof questId === "string") {
      getQuest(questId).then((data) => {
        this.quest = data.quest;
      });
    }
  },
});

export const route: RouteRecordRaw = {
  path: `/quests/:${questRouteParam}`,
  component,
  name: "quest",
};
export default component;
</script>

<style></style>
