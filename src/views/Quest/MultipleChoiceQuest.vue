<template>
  <ol style="margin-left: 40px">
    <li
      v-for="(opt, idx) in quest.options"
      :key="idx"
      class="selectable option"
    >
      {{ opt }}
    </li>
  </ol>
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
