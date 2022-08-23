<template>
  <c-form-layout title="プロフィール">
    <div class="avatar" style="margin: auto; width: 150px; height: 150px">
      <p-avatar
        v-if="race"
        :image="avatarImage"
        class="mr-2"
        size="xlarge"
        shape="circle"
        style="width: 100%; height: 100%"
      />
      <svg v-else viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#707070" stroke="none" />
        <rect x="10" y="19" width="20" height="2" fill="white" />
        <rect x="19" y="10" width="2" height="20" fill="white" />
      </svg>
    </div>

    <template #fields>
      <span class="p-float-label">
        <p-input-text id="player" type="text" autocomplete="username" />
        <label for="player">名前</label>
      </span>
    </template>

    <template #action>
      <p-button label="登録" type="submit" class="p-button-lg" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import PAvatar from "primevue/avatar";
import PButton from "primevue/button";
import PInputText from "primevue/inputtext";

import CFormLayout from "../../layout/Form.vue";

import avatarImage from "../../assets/images/pancake1.png";

const component = defineComponent({
  components: {
    CFormLayout,
    PAvatar,
    PButton,
    PInputText,
  },
  data: () => ({
    avatarImage,
    race: undefined as undefined | number,
  }),
});

export const route: RouteRecordRaw = {
  path: "/auth/signup/profile",
  component,
};
export default component;
</script>

<style></style>
