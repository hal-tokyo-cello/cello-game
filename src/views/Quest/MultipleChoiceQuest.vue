<template>
  <ol style="margin-left: 40px">
    <li
      v-for="(opt, idx) in quest.options"
      @click="$emit('submitAnswer', idx.toString())"
      class="option"
    >
      {{ opt }}
    </li>
  </ol>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import { defineComponent, PropType } from "vue";

import { answerQuest, QuestDetail } from "../../util/api/quest";

import { route as Quests } from "./QuestOverview.vue";

export default defineComponent({
  emits: {
    submitAnswer: (answer: string) => true,
  },
  props: {
    quest: {
      type: Object as PropType<QuestDetail>,
      required: true,
    },
  },
  methods: {
    answer(answer: string) {
      answerQuest(this.quest.id, { answer: answer }).then(
        (data) =>
          data.correct
            ? this.$router.push({ path: Quests.path }).then(() =>
                this.$toast.add({
                  severity: ToastSeverity.SUCCESS,
                  life: 3000,
                  summary: "正解しました",
                  detail: "次のクエストにチャレンジしよう！",
                })
              )
            : this.$toast.add({
                severity: ToastSeverity.WARN,
                life: 3000,
                summary: "不正解でした",
                detail: "お題をよくみて、もう一度チャレンジしよう！",
              }),
        () =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 3000,
            summary: "もう一度試してください",
          })
      );
    },
  },
});
</script>

<style scoped>
.option {
  font-size: 20px;
  cursor: pointer;
  margin: 1rem 0;
  cursor: pointer;
}
</style>
