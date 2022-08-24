<template>
  <component v-if="!!quest && !!component" :is="component" :quest="quest" />
  <p v-else style="text-align: center">このクエストよくわからん。。。</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { getQuest, QuestDetail } from "../../util/api/quest";

import Combine from "./CombinationQuest.vue";
import Multiple from "./MultipleChoiceQuest.vue";

/**
 * Name of route param for quest id.
 */
export const questRouteParam = "quest";

const component = defineComponent({
  components: {
    Combine,
    Multiple,
  },
  data: () => ({
    quest: {} as QuestDetail,
  }),
  computed: {
    component() {
      switch (this.quest.genre) {
        case "COM":
          return Combine;
        case "MUL":
          return Multiple;
        default:
          return undefined;
      }
    },
  },
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
