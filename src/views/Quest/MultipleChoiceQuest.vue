<template>
  <h1 style="font-size: 2.5rem">4択問題</h1>

  <span>
    <span class="question-no">{{ quest.id }}</span>
    <span style="margin-left: 1em">{{ quest.title }}</span>
  </span>

  <c-excel-button style="margin: 60px 0 30px" />

  <ol style="margin-left: 40px">
    <li v-for="(opt, idx) in quest.options" :key="idx" class="selectable">
      {{ opt }}
    </li>
  </ol>

  <div style="text-align: center; margin-top: 50px">
    <button v-for="(opt, idx) in 4" :key="idx">{{ opt }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { QuestDetail } from "../../util/api/quest";

import CExcelButton from "../../components/ExcelDownloadButton.vue";

export default defineComponent({
  components: {
    CExcelButton,
  },
  props: {
    quest: {
      type: Object as PropType<QuestDetail>,
      required: true,
    },
  },
});
</script>

<style scoped>
button {
  margin-left: 30px;
  width: 50px;
  height: 50px;
  color: #f8f8f8;
  background-color: #fc8c0d;
  border-color: #fc8c0d;
  font-size: 24px;
}

button:hover {
  background-color: #f8f8f8;
  color: black;
}

li {
  font-size: 20px;
  cursor: pointer;
  margin: 1rem 0;
}

.question-no {
  padding: 8px;
  padding-top: 3px;
  color: white;
  font-size: 18px;
  background: center no-repeat url("../../assets/images/question.png");
  background-size: contain;
}
.question-no::before {
  content: "Q";
}

.selectable {
  cursor: pointer;
}
</style>
