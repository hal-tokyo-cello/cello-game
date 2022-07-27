<template>
  <h1 v-if="title" style="text-align: center">{{ title }}</h1>

  <slot />

  <form v-bind="$attrs">
    <div class="fields">
      <slot name="fields" />
    </div>

    <div v-if="$slots.action" class="actions">
      <slot name="action" />
    </div>
    <div v-else-if="actions" class="actions">
      <template v-for="(action, idx) in actions" :key="idx">
        <p-button :label="action.label" @click="action.action" />
      </template>
    </div>
  </form>

  <div v-if="$slots.links" class="links">
    <slot name="links" />
  </div>
  <div v-else-if="links" class="links">
    <template v-for="(link, idx) in links" :key="idx">
      <router-link :to="link.href">
        <p-button :label="link.label" class="p-button-link p-button-sm" />
      </router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

import PButton from "primevue/button";

interface LinkData {
  href: string;
  label: string;
}

interface ActionData {
  label: string;
  action: (ev: MouseEvent) => void;
}

export default defineComponent({
  components: {
    PButton,
  },
  props: {
    title: String,
    submitButton: String,
    links: Array as PropType<Array<LinkData>>,
    actions: Array as PropType<Array<ActionData>>,
  },
});
</script>

<style scoped>
.fields {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: stretch;
}

.fields,
.fields :deep(*) {
  width: 620px;
}

.fields :deep(input) {
  height: 70px;
}

.fields :deep(.p-password i) {
  width: initial;
}

.fields :deep(p.p-error::before) {
  content: "※";
}

.fields :deep(.p-float-label) {
  margin-top: 50px;
}

.actions {
  margin: 50px 0 25px;
  display: flex;
  justify-content: center;
}

.actions :deep(button) {
  margin: 0 16px;
}

.links {
  text-align: center;
}

.links :deep(a) {
  display: block;
  text-decoration: none;
}
</style>