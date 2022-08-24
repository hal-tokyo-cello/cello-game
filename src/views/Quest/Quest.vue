<template>
  <template v-if="!!quest">
    <h1 class="quest-genre-text">{{ questGenreText }}</h1>

    <div class="question">
      <div class="question-badge">{{ quest.id }}</div>
      <span class="question-text">{{ quest.title }}</span>
    </div>
    <button class="excel-download" style="margin: 60px 0 30px">
      <span class="icon">＋</span>
      <span>ファイルダウンロード</span>
    </button>

    <component v-if="!!component" :is="component" :quest="quest" />
  </template>

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
    quest: undefined as QuestDetail | undefined,
  }),
  computed: {
    questGenreText() {
      switch (this.quest?.genre) {
        case "COM":
          return "組み合わせ問題";
        case "MUL":
          return "4択問題";
        default:
          return undefined;
      }
    },
    component() {
      switch (this.quest?.genre) {
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

<style scoped>
.quest-genre-text {
  font-size: 2.5em;
  color: #707070;
  margin: 70px 0 60px;
}

.question {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.question-badge {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding-bottom: 4px;
  background-image: url("../../assets/images/question.png");
  color: white;
}

.question-badge::before {
  content: "Q";
}

.question-text {
  margin-left: 20px;
  color: #545454;
}

.excel-download {
  border: none;
  min-width: 220px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: #107c10;
}

.excel-download:hover {
  opacity: 0.7;
}

.excel-download > .icon {
  margin-right: 8px;
  font-size: 30px;
}
</style>
