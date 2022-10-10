<template>
  <c-form-layout title="サインイン" @submit.prevent="Signin">
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
        <p-password v-model="password" :feedback="false" id="password" />
        <label for="password">パスワード</label>
      </span>
      <p v-if="isEmptyPassword" class="p-error">
        パスワードが入力されていません
      </p>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="サインイン" type="submit" />
    </template>

    <template #links>
      <router-link :to="Forget.path">
        <p-button
          label="パスワードを忘れた"
          class="p-button-link p-button-sm"
        />
      </router-link>
      <router-link :to="SignUp.path">
        <p-button
          label="初めてご利用の方はこちら"
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

import { ApiError, signIn, User } from "../../util/api";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";
import { route as Quests } from "../Quest/QuestOverview.vue";
import { route as Forget } from "./Forget.vue";
import { route as SignUp } from "./Signup.vue";
import { verifiedUser } from "./Verification.vue";

const signInErrorDetail = (code: number) => {
  switch (code) {
    case 400:
      return "メールアドレスかパスワードが正しくありません。";
    case 404:
      return "使用されているメールアドレスが未登録です。";
  }
};

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PInputText,
    PPassword,
  },
  emits: {
    "update:user": (user: User) => true,
  },
  data: () => ({
    SignUp,
    Forget,
    attempted: false,
    mail: "",
    password: "",
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
  },
  methods: {
    Signin() {
      this.attempted = true;

      if (this.isEmptyMail || this.isInvalidMail || this.isEmptyMail) {
        return;
      }

      signIn({ email: this.mail, password: this.password })
        .catch((error: ApiError) =>
          Promise.reject(
            this.$toast.add({
              severity: ToastSeverity.ERROR,
              life: 3000,
              closable: false,
              summary: "サインインできません",
              detail: signInErrorDetail(error.error.code),
            })
          )
        )
        .then(({ accountId }) => {
          const userId = accountId ?? "24dccd20-a401-4bd4-923c-d0cdccfddb38";
          localStorage.setItem(verifiedUser, userId);
          return userId;
        })
        .then((userId) =>
          this.$emit("update:user", { accountId: userId } as User)
        )
        .then(() => this.$router.push({ path: Quests.path }));
    },
  },
});

export const route: RouteRecordRaw = { path: "/auth/signin", component };
export default component;
</script>

<style scoped></style>
