<template></template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

const component = defineComponent({
  setup() {},
});

export const questRouteParam = "quest";

export const route: RouteRecordRaw = {
  path: `/quests/:${questRouteParam}`,
  component,
  name: "quest",
};
export default component;
</script>

<style></style>
