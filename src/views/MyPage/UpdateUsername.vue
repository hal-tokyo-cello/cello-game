<template>
  <c-form-layout title="ユーザー名の変更" @submit.prevent="confirm">
    <template #fields>
      <span class="p-float-label">
        <p-input-text
          id="username"
          v-model="username"
          autocomplete="username"
        />
        <label for="username">ユーザー名</label>
      </span>
      <p v-if="isInvalid" class="p-error">このユーザー名は使用できません</p>
    </template>

    <template #action>
      <p-button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <p-button label="確認" type="submit" />
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";
import { ToastSeverity } from "primevue/api";

import { updateUsername, User } from "../../util/api";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";

import CFormLayout from "../../layout/Form.vue";
import { route as MyPage } from "./Mypage.vue";
import { userKey } from "../../App.vue";

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
    username: "",
    attempted: false,
    user: inject(userKey) as User,
  }),
  computed: {
    isInvalid() {
      return this.attempted && this.username.length <= 0;
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

      if (this.username === this.user.name) {
        this.leave();
        return;
      }

      updateUsername(this.user.accountId, { username: this.username }).then(
        () =>
          Promise.resolve(
            this.$emit("update:user", { ...this.user, name: this.username })
          )
            .then(() => this.leave())
            .then(() =>
              this.$toast.add({
                severity: ToastSeverity.SUCCESS,
                life: 3000,
                summary: "ユーザー名を更新しました",
              })
            ),
        () =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 3000,
            summary: "ユーザー名を更新できませんでした",
          })
      );
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/username", component };
export default component;
</script>

<style scoped></style>
