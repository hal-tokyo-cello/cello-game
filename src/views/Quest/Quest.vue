<template>
  <div v-if="!!quest" style="position: relative">
    <h1 class="quest-genre-text">{{ questGenreText }}</h1>

    <div class="question">
      <div class="question-badge">{{ quest.id }}</div>
      <span class="question-text">{{ quest.title }}</span>
    </div>

    <a
      :href="quest.playground"
      :download="`クエスト${quest.id}.xlsx`"
      style="text-decoration: none"
    >
      <p-button
        :disabled="!!quest.playground ? undefined : 'disabled'"
        label="ファイルダウンロード"
        icon="pi pi-plus"
        iconPos="left"
        class="excel-download"
      />
    </a>

    <component
      v-if="!!component"
      :is="component"
      :quest="quest"
      @submitAnswer="submitAnswer"
    />
  </div>

  <p v-else-if="quest === null" style="text-align: center">
    このクエストよくわからん。。。
  </p>

  <p v-else style="text-align: center">ろーでぃんぐ中。。。</p>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { answerQuest, getQuest, QuestDetail } from "../../util/api/quest";

import PButton from "primevue/button";

import Combine from "./CombinationQuest.vue";
import Multiple from "./MultipleChoiceQuest.vue";
import { route as Quests } from "./QuestOverview.vue";
import { userKey } from "../../App.vue";
import { User } from "../../util/api";

/**
 * Name of route param for quest id.
 */
export const questRouteParam = "quest";

const questGenreText = {
  COM: "組み合わせ問題",
  MUL: "4択問題",
};

const questGenreComponent = {
  COM: Combine,
  MUL: Multiple,
};

const component = defineComponent({
  components: {
    PButton,
    Combine,
    Multiple,
  },
  data: () => ({
    user: inject(userKey) as User,
    quest: undefined as QuestDetail | undefined | null,
  }),
  computed: {
    questGenreText() {
      return !!this.quest && questGenreText[this.quest.genre];
    },
    component() {
      return !!this.quest && questGenreComponent[this.quest.genre];
    },
  },
  methods: {
    submitAnswer(answer: string) {
      if (!this.quest) {
        return;
      }

      answerQuest(this.quest.id, { answer: answer })
        .then(
          (data) => (data.correct ? Promise.resolve() : Promise.reject()),
          () =>
            this.$toast.add({
              severity: ToastSeverity.ERROR,
              life: 3000,
              summary: "もう一度試してください",
            })
        )
        .then(() => (this.user.avatar.totalExp += this.quest?.experience ?? 0))
        .then(() => this.$router.push({ path: Quests.path }))
        .then(
          () =>
            this.$toast.add({
              severity: ToastSeverity.SUCCESS,
              life: 3000,
              summary: "正解しました",
              detail: "次のクエストにチャレンジしよう！",
            }),
          () =>
            this.$toast.add({
              severity: ToastSeverity.WARN,
              life: 3000,
              summary: "不正解でした",
              detail: "お題をよくみて、もう一度チャレンジしよう！",
            })
        );
    },
  },
  mounted() {
    const questId = ((val: string | string[]) =>
      val === "string" ? val : val[0])(this.$route.params[questRouteParam]);

    getQuest(questId)
      .then((data) => (this.quest = data.quest))
      .catch(() => (this.quest = null))
      .then(() => console.log(this.quest?.playground ?? "no playground"));
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
  margin: 60px 0 30px;
  background-color: #107c10;
  border-color: #107c10;
}

.excel-download:hover:enabled {
  opacity: 0.7;
}
</style>
