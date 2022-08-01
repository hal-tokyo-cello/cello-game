<template>
  <p-dialog modal dismissable-mask close-on-escape :draggable="false" :visible="modelValue" @update:visible="onVisible"
    style="min-width: 620px; text-align: center;">
    <template #header>
      <p class="title">{{ quest?.title }}</p>
    </template>

    <div>
      <p class="genre">{{ quest?.genre }}</p>
      <p class="experience">{{ quest?.experience }}</p>
    </div>

    <template #footer>
      <div class="actions" style="text-align: center;">
        <p-button label="キャンセル" @click="cancel" class="cancel" />
        <p-button label="解答へ" @click="confirm" autofocus class="primary" />
      </div>
    </template>
  </p-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { QuestSummary } from "../util/api/quest";

import PButton from "primevue/button";
import PDialog from "primevue/dialog";

export default defineComponent({
  components: {
    PButton,
    PDialog,
  },
  props: {
    modelValue: Boolean,
    quest: {
      type: Object as PropType<QuestSummary>,
      required: true
    },
  },
  data() { return { visible: true, } },
  emits: {
    action: (yes: boolean) => true,
    "update:modelValue": (visible: boolean) => true
  },
  methods: {
    confirm() { this.$emit("action", true) },
    cancel() { this.$emit("action", false) },
    onVisible(visible: boolean) { this.$emit("update:modelValue", visible) }
  },
});
</script>

<style scoped>
.title,
.genre,
.experience {
  font-weight: bold;
}

.title {
  flex: 1 1;
  font-size: 21px;
  line-height: 25px;
  color: #ff8c00;
}

:deep(.p-dialog-header-icons) {
  display: none;
}

.genre {
  font-size: 12px;
  line-height: 14px;
  color: #666666;
}

.genre::before {
  content: "ジャンル：";
}

.experience {
  margin: 0;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #666666;
}

.experience::before {
  content: "🅿︎";
}

.actions button {
  width: 150px;
  height: 52px;
  margin: 0;
  cursor: pointer;
}

.actions button:first-of-type {
  margin-right: 40px;
}
</style>