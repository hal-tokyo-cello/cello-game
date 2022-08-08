<template>
  <c-form-layout title="ユーザー情報の変更" @submit.prevent="confirm">
    <template #fields>
      <span class="p-float-label">
        <p-password
          v-model="oldPass"
          :feedback="false"
          autocomplete="current-password"
          id="oldPass"
        />
        <label for="oldPass">現在のパスワード</label>
      </span>

      <span class="p-float-label">
        <p-password
          v-model="newPass"
          toggle-mask
          autocomplete="new-password"
          id="newPass"
        />
        <label for="newPass">新しいパスワード</label>
      </span>

      <span class="p-float-label">
        <p-password
          v-model="confPass"
          toggle-mask
          :feedback="false"
          autocomplete="new-password"
          id="confPass"
        />
        <label for="confPass">新しいパスワード</label>
      </span>
    </template>

    <template #action>
      <p-button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <p-button label="登録" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { ApiError, updatePassword, User } from "../../util/api";

import PButton from "primevue/button";
import PPassword from "primevue/password";

import { userKey } from "../../App.vue";
import CFormLayout from "../../layout/Form.vue";
import { route as MyPage } from "./Mypage.vue";

const updateErrorDetail: Record<number, string> = {
  400: "指定されたパスワードは使用できません。",
  401: "入力されたパスワードは登録されているパスワードと一致しません。",
};

const component = defineComponent({
  components: {
    CFormLayout,
    PButton,
    PPassword,
  },
  data: () => ({
    user: inject(userKey) as User,
    oldPass: "",
    newPass: "",
    confPass: "",
  }),
  computed: {
    isEmptyOldPassword() {
      return this.oldPass.length <= 0;
    },
    isEmptyNewPassword() {
      return this.newPass.length <= 0;
    },
    isEmptyConfPassword() {
      return this.confPass.length <= 0;
    },
    isMismatchNewPassword() {
      return this.newPass !== this.confPass;
    },
    isReusedPassword() {
      return this.oldPass === this.newPass;
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
      if (
        this.isEmptyOldPassword ||
        this.isEmptyNewPassword ||
        this.isReusedPassword ||
        this.isEmptyConfPassword ||
        this.isMismatchNewPassword
      ) {
        this.$toast.add({
          severity: ToastSeverity.WARN,
          life: 3000,
          summary: "入力された情報に問題があります",
          detail: "パスワードを確認した上、もう一度お試しください。",
        });
        return;
      }

      updatePassword(this.user.accountId, {
        oldPassword: this.oldPass,
        newPassword: this.newPass,
      }).then(
        () =>
          this.leave().then(() =>
            this.$toast.add({
              severity: ToastSeverity.SUCCESS,
              life: 3000,
              summary: "パスワードを更新しました",
            })
          ),
        (error: ApiError) =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 5000,
            summary: "パスワード更新できませんでした",
            detail: updateErrorDetail[error.error.code],
          })
      );
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/password", component };
export default component;
</script>

<style scoped></style>
