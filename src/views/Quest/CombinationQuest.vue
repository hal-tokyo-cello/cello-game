<template>
  <div>
    <div class="answer-field">
      <div
        v-for="(ans, idx) in answers"
        draggable="true"
        dropzone="true"
        @dragstart="startMovingAnswer(idx)"
        @dragend="(ev) => releaseAnswer(idx)(ev)"
        @click="endMoving(idx)"
        @drop="endMoving(idx)"
        @dragover.prevent="() => {}"
        class="answer-box"
        :class="{
          empty: ans === '',
          option: ans !== '',
          draggable: ans !== '',
        }"
      >
        {{ ans }}
      </div>
    </div>

    <button
      class="answer button"
      @click="
        $emit('submitAnswer', answers.filter((ans) => ans != '').join('|'))
      "
    >
      解答する
    </button>
  </div>

  <div class="option-field">
    <div
      v-for="(opt, idx) in options"
      draggable="true"
      @click="startAnswering(idx)"
      @dragstart="startAnswering(idx)"
      class="draggable answer-box option"
    >
      {{ opt }}
    </div>
    <div class="button-bar">
      <button class="clear button" @click="resetAnswers">全て消す</button>
      <button
        class="draggable remove button"
        draggable="true"
        @click="startRemoving"
        @dragstart="startRemoving"
      >
        <i class="pi pi-trash" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { QuestDetail } from "../../util/api/quest";

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
  data: () => ({
    answers: [] as string[],
    options: [] as string[],
    /**
     * Index of the answer field block when moving.
     */
    movingFrom: undefined as number | "option" | undefined,
    /**
     * The concrete value of the option.
     */
    moving: undefined as string | "remove" | undefined,
  }),
  methods: {
    resetAnswers() {
      this.options = [...this.quest.options];
      this.answers = this.quest.options.map(() => "");
    },
    removeAnswer(idx: number) {
      if (this.answers[idx] === "") {
        return;
      }

      this.options = [...this.options, this.answers[idx]];
      this.answers[idx] = "";
    },
    startAnswering(idx: number) {
      this.moving = this.options[idx];
      this.movingFrom = "option";
    },
    startRemoving() {
      this.moving = "remove";
    },
    startMovingAnswer(idx: number) {
      this.moving = this.answers[idx];
      this.movingFrom = idx;
    },
    endMoving(idx: number) {
      if (this.moving == undefined) {
        return;
      }

      const ans = this.answers[idx];

      if (this.moving === "remove") {
        this.removeAnswer(idx);
      } else if (typeof this.movingFrom === "number") {
        // moving within answer field
        this.answers[this.movingFrom] = ans;
        this.answers[idx] = this.moving;
      } else if (this.movingFrom === "option") {
        // moving from option field
        if (ans != "") {
          this.options = [...this.options, ans];
        }

        this.answers[idx] = this.moving;
        this.options.splice(
          this.options.findIndex((opt) => opt === this.moving),
          1
        );
      }

      this.moving = undefined;
      this.movingFrom = undefined;
    },
    releaseAnswer(idx: number) {
      return (ev: DragEvent) => {
        if (
          this.answers[idx] === "" ||
          ev.dataTransfer?.dropEffect !== "none"
        ) {
          return;
        }

        this.removeAnswer(idx);
      };
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

.button:hover {
  opacity: 0.7;
}

.draggable:hover {
  cursor: grab;
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

.answer-box.empty {
  border: solid 1px #ea4307;
}

.answer-box.option {
  border: solid 1px #fdb913;
}

.answer-box.symbol {
  background-color: #fdb913;
  color: #f8f8f8;
  font-size: 30px;
}

.button.answer {
  width: 150px;
  height: 52px;
  background-color: #ea4307;
  margin-left: 340px;
}

.button.answer:hover {
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

.button.clear {
  background-color: #fdb913;
  width: 80px;
  height: 40px;
}

.button.remove {
  background-color: #fdb913;
  margin-left: 10px;
  width: 40px;
  height: 40px;
}
</style>
