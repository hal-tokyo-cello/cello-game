<template>
  <c-form-layout title="ワンタイムパス入力画面" @submit="confirm">
    <p style="margin-top: 50px; text-align: center">
      {{ `${email}に4桁の認証コードを送信しました。` }}
    </p>

    <template #fields>
      <span class="p-float-label">
        <p-input-text id="otp" type="number" v-model="otp" />
        <label for="otp">メール記載の認証コードを入力してください。</label>
      </span>
    </template>

    <template #action>
      <router-link :to="SignUp.path" style="text-decoration: none">
        <p-button label="戻る" class="p-button-outlined" />
      </router-link>
      <p-button label="送信" :disabled="!canTry" type="submit" />
    </template>

    <template #links>
      <p-button
        label="認証メールを再送信"
        :click="resendOTP"
        class="p-button-link p-button-sm"
      />
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
import { ApiError, resend, verify } from "../../util/api";
import { route as Profile } from "./Profile.vue";
import { route as SignUp, signUpMailKey } from "./Signup.vue";

const resendErrorDetail: Record<number, string> = {
  404: "メールアドレスが登録していません、サインアップ画面に戻ってやり直してください。",
};

const verifyErrorDetail: Record<number, string> = {
  400: "OTPが一致しません。",
  404: "メールアドレスが登録していません、サインアップ画面に戻ってやり直してください。",
};

export const verifiedUser = "VERIFIED_USER";

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
    otp: "",
    canTry: true,
  }),
  methods: {
    resendOTP() {
      resend({ email: this.email }).then(
        () =>
          this.$toast.add({
            severity: ToastSeverity.SUCCESS,
            life: 3000,
            summary: "認証メールを再送しました",
          }),
        (error: ApiError) =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 5000,
            summary: "メールアドレス認証できませんでした",
            detail: resendErrorDetail[error.error.code],
          })
      );
    },
    confirm() {
      Promise.resolve(() => {
        this.canTry = false;
      })
        .then(() => verify({ email: this.email, otp: this.otp }))
        .then((data) => localStorage.setItem(verifiedUser, data.userId))
        .then(
          () => this.$router.push({ path: Profile.path }),
          (error: ApiError) =>
            this.$toast.add({
              severity: ToastSeverity.ERROR,
              life: 5000,
              summary: "メールアドレス認証できませんでした",
              detail: verifyErrorDetail[error.error.code],
            })
        )
        .then(() => {
          this.canTry = true;
        });
    },
  },
  mounted() {
    const mail = localStorage.getItem(signUpMailKey);
    localStorage.removeItem(signUpMailKey);
    if (typeof mail !== "string") {
      this.$toast.add({
        severity: ToastSeverity.ERROR,
        life: 5000,
        summary: "未知のエラーが発生しました",
        detail: "サインアップ画面に戻ってやり直してください。",
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
