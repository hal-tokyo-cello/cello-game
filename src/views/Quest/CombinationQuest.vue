<template>
  <div>
    <div class="answer-field">
      <div
        v-for="(ans, idx) in answers"
        dropzone="true"
        @click="endMovingAnswer(idx)"
        @dragover.prevent="generalDragOver"
        @drop="endMovingAnswer(idx)"
        class="answer-box"
        :class="{ red: ans === '', yellow: ans !== '' }"
      >
        {{ ans }}
      </div>
    </div>

    <button class="answer button">解答する</button>
  </div>

  <div class="option-field">
    <div
      v-for="(opt, idx) in quest.options"
      draggable="true"
      @click="startMovingAnswer(idx)"
      @dragstart="startMovingAnswer(idx)"
      class="clickable answer-box yellow"
    >
      {{ opt }}
    </div>
    <div class="button-bar">
      <button class="clear button" @click="resetAnswers">全て消す</button>
      <button class="backspace button">←</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { QuestDetail } from "../../util/api/quest";

export default defineComponent({
  props: {
    quest: {
      type: Object as PropType<QuestDetail>,
      required: true,
    },
  },
  data: () => ({
    answers: [] as string[],
    moving: undefined as number | undefined,
  }),
  methods: {
    resetAnswers() {
      this.answers = this.quest.options.map(() => "");
    },
    startMovingAnswer(idx: number) {
      this.moving = idx;
    },
    endMovingAnswer(idx: number) {
      if (this.moving == undefined) {
        return;
      }
      this.answers[idx] = this.quest.options[this.moving];
      this.moving = undefined;
    },
    generalDragOver(ev: DragEvent) {
      if (ev.dataTransfer) {
        ev.dataTransfer.dropEffect = "copy";
      }
    },
  },
  mounted() {
    this.resetAnswers();
  },
});
</script>

<style scoped>
.button {
  font-size: 16px;
  color: white;
  width: 80px;
  height: 32px;
  border: none;
  cursor: pointer;
  position: relative;
}

.button:hover::before {
  content: "";
  position: absolute;
  top: -1%;
  left: -1%;
  width: 102%;
  height: 102%;
  background: hsl(0, 0%, 75%);
  mix-blend-mode: hard-light;
}

.clickable:hover {
  cursor: pointer;
}

.answer-field {
  width: 490px;
  border: solid 1px #fc8c0d;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;
}

.answer-box {
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer-box.red {
  border: solid 1px #ea4307;
}

.answer-box.yellow {
  border: solid 1px #fdb913;
}

.answer-box.symbol {
  background-color: #fdb913;
  color: #f8f8f8;
  font-size: 30px;
}

.answer {
  width: 150px;
  height: 52px;
  background-color: #ea4307;
  margin-left: 340px;
}

.answer:hover {
  background-color: #ff4400;
}

.option-field {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 360px;
  height: 360px;
  background-color: white;
  border: solid 1px;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.option-field .button-bar {
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
}

.clear {
  background-color: #fdb913;
  width: 80px;
  height: 40px;
}

.backspace {
  background-color: #fdb913;
  margin-left: 10px;
  width: 40px;
  height: 40px;
}
</style>
