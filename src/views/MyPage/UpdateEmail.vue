<template>
  <c-form-layout title="メールアドレスの変更" @submit.prevent="confirm">
    <template #fields>
      <span class="p-float-label">
        <p-input-text
          id="email"
          v-model="email"
          type="email"
          autocomplete="email"
        />
        <label for="username"></label>
      </span>
      <p v-if="isEmpty" class="p-error">メールアドレスを入力されていません</p>
      <p v-if="isInvalid" class="p-error">メールアドレスではありません</p>
    </template>

    <template #action>
      <p-button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <p-button label="確認" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import validator from "validator";
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { updateUserEmail, User } from "../../util/api";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";

import { userKey } from "../../App.vue";
import CFormLayout from "../../layout/Form.vue";
import { route as MyPage } from "./Mypage.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PInputText,
  },
  emits: {
    "update:user": (user: User) => true,
  },
  data: () => ({
    email: "",
    attempted: false,
    user: inject(userKey) as User,
  }),
  computed: {
    isEmpty() {
      return this.attempted && this.email.length <= 0;
    },
    isInvalid() {
      return this.attempted && !validator.isEmail(this.email);
    },
  },
  methods: {
    leave() {
      return this.$router.push({ path: MyPage.path });
    },
    cancel() {
      this.leave();
    },
    confirm() {
      this.attempted = true;

      if (this.isInvalid) {
        return;
      }

      if (this.email === this.user.email) {
        this.leave();
        return;
      }

      updateUserEmail(this.user.accountId, { email: this.email }).then(
        () =>
          Promise.resolve(
            this.$emit("update:user", { ...this.user, email: this.email })
          )
            .then(() => this.leave())
            .then(() =>
              this.$toast.add({
                severity: ToastSeverity.SUCCESS,
                life: 3000,
                summary: "メールアドレスを更新しました",
              })
            ),
        () =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 3000,
            summary: "メールアドレスを更新できませんでした",
          })
      );
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/email", component };
export default component;
</script>

<style scoped></style>
