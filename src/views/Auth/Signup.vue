<template>
  <c-form-layout title="新規登録" @submit.prevent="Signup">
    <template #fields>
      <span class="p-float-label">
        <p-input-text id="email" type="email" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <p v-if="isEmptyMail" class="p-error">
        メールアドレスが入力されていません
      </p>
      <p v-if="isInvalidMail" class="p-error">メールアドレスではありません</p>

      <span class="p-float-label">
        <p-password v-model="password" id="password" />
        <label for="password">
          パスワード
          <span style="font-size: 12px">
            ※半角英数字記号を含む8文字以上32文字以下
          </span>
        </label>
      </span>
      <p v-if="isEmptyPassword" class="p-error">
        パスワードが入力されていません
      </p>
      <p v-if="isMismatchPassword" class="p-error">
        確認用パスワードと一致しません
      </p>

      <span class="p-float-label">
        <p-password v-model="confPassword" :feedback="false" id="checkPass" />
        <label for="checkPass">確認用パスワード</label>
      </span>
      <p v-if="isEmptyConfirm" class="p-error">
        確認用パスワードが入力されていません
      </p>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="サインアップ" type="submit" />
    </template>

    <template #links>
      <router-link style="text-decoration: none" :to="SignIn.path">
        <p-button
          label="サインインはこちら"
          class="p-button-link p-button-sm"
        />
      </router-link>
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import validator from "validator";
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { signUp } from "../../util/api";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";
import { route as Verification } from "./Verification.vue";
import { route as SignIn } from "./Signin.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PInputText,
    PPassword,
  },
  data: () => ({
    SignIn,
    mail: "",
    password: "",
    confPassword: "",
    attempted: false,
  }),
  computed: {
    isEmptyMail() {
      return this.attempted && this.mail.length <= 0;
    },
    isInvalidMail() {
      return this.attempted && !validator.isEmail(this.mail);
    },
    isEmptyPassword() {
      return this.attempted && this.password.length <= 0;
    },
    isMismatchPassword() {
      return this.attempted && this.password !== this.confPassword;
    },
    isEmptyConfirm() {
      return this.attempted && this.confPassword.length <= 0;
    },
  },
  methods: {
    Signup() {
      this.attempted = true;

      if (
        this.isEmptyMail ||
        this.isInvalidMail ||
        this.isEmptyPassword ||
        this.isEmptyConfirm ||
        this.isMismatchPassword
      ) {
        return;
      }

      signUp({ email: this.mail, password: this.password }).then(
        () => this.$router.push({ path: Verification.path }),
        () =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 3000,
            closable: false,
            summary: "サインアップできません",
            detail: "メールアドレスを確認した上で再度お試しください。",
          })
      );
    },
  },
});

export const route: RouteRecordRaw = { path: "/auth/signup", component };
export default component;
</script>

<style scoped></style>
