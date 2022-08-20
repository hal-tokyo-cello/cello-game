<template>
  <c-form-layout title="パスワード再設定" @submit.prevent="requestReset">
    <template #fields>
      <span class="p-float-label">
        <p-input-text
          v-model="mail"
          id="email"
          type="email"
          autocomplete="email"
        />
        <label for="email">メールアドレス</label>
      </span>
      <p v-if="isEmptyEmail" class="p-error">
        メールアドレスが入力されていません
      </p>
      <p v-if="isInvalidEmail" class="p-error">メールアドレスではありません</p>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="次へ" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import validator from "validator";
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
  data: () => ({
    mail: "",
    attempted: false,
  }),
  computed: {
    isEmptyEmail() {
      return this.attempted && this.mail.length <= 0;
    },
    isInvalidEmail() {
      return this.attempted && !validator.isEmail(this.mail);
    },
  },
  methods: {
    requestReset() {
      this.attempted = false;

      if (this.isEmptyEmail || this.isInvalidEmail) {
        return;
      }
    },
  },
});

export const route: RouteRecordRaw = {
  path: "/auth/forgetpassword",
  component,
};
export default component;
</script>

<style scoped></style>
