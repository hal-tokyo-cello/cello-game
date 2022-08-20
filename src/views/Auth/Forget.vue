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
      <p-button
        label="キャンセル"
        @click="onCancel"
        class="p-button-outlined"
      />
      <p-button label="次へ" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import validator from "validator";
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { ApiError, forget } from "../../util/api";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";
import { route as SignIn } from "./Signin.vue";

const toastDetail: Record<number, string> = {
  400: "もう一度確認してやり直してください。",
  404: "未登録のメールアドレスが送信されました。",
};

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
    onCancel() {
      this.$router.push({ path: SignIn.path });
    },
    requestReset() {
      this.attempted = false;

      if (this.isEmptyEmail || this.isInvalidEmail) {
        return;
      }

      forget({ email: this.mail }).then(
        () =>
          this.$router.push({ path: SignIn.path }).then(() =>
            this.$toast.add({
              severity: ToastSeverity.SUCCESS,
              life: 3000,
              summary: "パスワードリセット用メールを送信しました",
              detail:
                "メールをチェックして、指示通りにパスワードをリセットしてください。",
            })
          ),
        (error: ApiError) =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 3000,
            summary: "リセット用メールを発行できませんでした",
            detail: toastDetail[error.error.code],
          })
      );
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
