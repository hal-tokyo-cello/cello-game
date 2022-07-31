<template>
  <c-form-layout title="ワンタイムパス入力画面">
    <p style="margin-top: 50px; text-align: center">
      **********に4桁の認証コードを送信しました。
    </p>

    <template #fields>
      <span class="p-float-label">
        <p-input-text id="email" type="email" v-model="value" />
        <label for="email">メール記載の認証コードを入力してください。</label>
      </span>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="送信" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PInputText,
    PPassword,
  },
  data() {
    return {
      value: "",
    };
  },
});

export const route: RouteRecordRaw = { path: "/auth/verify", component };
export default component;
</script>

<style scoped></style>
