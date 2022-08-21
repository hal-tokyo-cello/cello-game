<template>
  <c-form-layout title="パスワード再設定" @submit.prevent="Signup">
    <template #fields>
      <span class="p-float-label">
        <p-password
          v-model="password"
          autocomplete="new-password"
          id="password"
        />
        <label for="password">
          新規パスワード
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
        <p-password
          v-model="confPassword"
          :feedback="false"
          autocomplete="new-password"
          id="checkPass"
        />
        <label for="checkPass">確認用パスワード</label>
      </span>
      <p v-if="isEmptyConf" class="p-error">
        確認用パスワードが入力されていません
      </p>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="サインアップ" type="submit" />
    </template>

    <template #links>
      <router-link to="/signin">
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
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { ApiError, reset } from "../../util/api";

import PButton from "primevue/button";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";
import { route as SignIn } from "./Signin.vue";
import { route as Forget } from "./Forget.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PPassword,
  },
  data: () => ({
    password: "",
    confPassword: "",
    attempted: false,
    request: "",
  }),
  computed: {
    isEmptyPassword() {
      return this.attempted && this.password.length <= 0;
    },
    isEmptyConf() {
      return this.attempted && this.confPassword.length <= 0;
    },
    isMismatchPassword() {
      return this.attempted && this.password !== this.confPassword;
    },
  },
  methods: {
    Signup() {
      this.attempted = true;

      if (this.isEmptyPassword || this.isEmptyConf || this.isMismatchPassword) {
        return;
      }

      reset({ password: this.password, requestId: this.request }).then(
        () =>
          this.$router.push({ path: SignIn.path }).then(() =>
            this.$toast.add({
              severity: ToastSeverity.SUCCESS,
              life: 3000,
              summary: "パスワード更新しました",
            })
          ),
        (error: ApiError) =>
          error.error.code.toString(10)[0] == "4" // status code of 4xx
            ? this.$router.push({ path: Forget.path }).then(() =>
                this.$toast.add({
                  severity: ToastSeverity.ERROR,
                  life: 5000,
                  summary: "パスワード更新できませんでした",
                  detail:
                    "「パスワードを忘れました」からもう一度やり直してください。",
                })
              )
            : this.$toast.add({
                severity: ToastSeverity.ERROR,
                life: 5000,
                summary: "パスワード更新できませんでした",
              })
      );
    },
  },
  mounted() {
    if (typeof this.$route.query.requestId !== "string") {
      this.$toast.add({
        severity: ToastSeverity.ERROR,
        life: 5000,
        summary: "未知のエラーが発生しました",
        detail: "パスワードリセット用メールからやり直してください。",
      });
    } else {
      this.request = this.$route.query.requestId;
    }
  },
});

export const route: RouteRecordRaw = { path: "/auth/resetpassword", component };
export default component;
</script>

<style scoped></style>
