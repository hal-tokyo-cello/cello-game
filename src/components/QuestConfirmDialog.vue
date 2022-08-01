<template >
  <div class="modal">
    <p class="title">{{ quest?.title }}</p>
    <p class="genre">{{ quest?.genre }}</p>
    <p class="experience">{{ quest?.experience }}</p>

    <div class="actions">
      <div class="cancel" @click="returnFalse">キャンセル</div>
      <div class="primary" @click="returnTrue">解答へ</div>
    </div>
  </div>

  <div class="overlay" @click="returnFalse"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { QuestSummary } from "../util/api/quest";

export default defineComponent({
  props: {
    quest: {
      type: Object as PropType<QuestSummary>,
      required: true
    },
  },
  methods: {
    returnFalse() {
      this.$emit("execute-method", false);
    },
    returnTrue() {
      this.$emit("execute-method", true);
    },
  },
});
</script>

<style scoped>
.modal {
  width: 620px;
  height: 253px;
  background: white;
  z-index: 2;
  display: block;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 6px #00000029;
  border: 1px solid #ff8c00;
}

.title {
  margin-top: 53px;
  margin-bottom: 0px;
  text-align: center;
  font: normal normal bold 21px/25px Segoe UI;
  letter-spacing: 0px;
  color: #ff8c00;
}

.genre {
  margin-top: 20px;
  margin-bottom: 6px;
  font: normal normal bold 12px/14px Segoe UI;
  letter-spacing: 0px;
  color: #666666;
}

.genre::before {
  content: "ジャンル：";
}

.experience {
  margin: 0;
  font: normal normal bold 15px/18px Segoe UI;
  letter-spacing: 0px;
  color: #666666;
}

.experience::before {
  content: "🅿︎";
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin: 2rem auto;
}

.actions .cancel {
  width: 150px;
  height: 52px;
  font: normal normal 600 15px/18px Segoe UI;
  letter-spacing: 0px;
  color: #fc8c0d;
  border: 1px solid #fc8c0d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.actions .primary {
  width: 150px;
  height: 52px;
  background: #fc8c0d 0% 0% no-repeat padding-box;
  cursor: pointer;
  font: normal normal 600 15px/18px Segoe UI;
  letter-spacing: 0px;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>