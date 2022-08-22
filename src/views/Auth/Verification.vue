<template>
  <c-form-layout title="ワンタイムパス入力画面">
    <p style="margin-top: 50px; text-align: center">
      {{ `${email}に4桁の認証コードを送信しました。` }}
    </p>

    <template #fields>
      <span class="p-float-label">
        <p-input-text id="email" type="email" v-model="value" />
        <label for="email">メール記載の認証コードを入力してください。</label>
      </span>
    </template>

    <template #action>
      <router-link :to="SignUp.path">
        <p-button label="キャンセル" class="p-button-outlined" />
      </router-link>
      <p-button label="送信" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";
import { route as SignUp, signUpMailKey } from "./Signup.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PInputText,
    PPassword,
  },
  data: () => ({
    SignUp,
    email: "",
    value: "",
  }),
  mounted() {
    const mail = localStorage.getItem(signUpMailKey);
    localStorage.removeItem(signUpMailKey);
    if (typeof mail !== "string") {
      this.$toast.add({
        severity: ToastSeverity.ERROR,
        life: 5000,
        summary: "未知のエラーが発生しました",
        detail: "サインアップ画面からやり直してください。",
      });
    } else {
      this.email = mail;
    }
  },
});

export const route: RouteRecordRaw = { path: "/auth/verify", component };
export default component;
</script>

<style scoped></style>
