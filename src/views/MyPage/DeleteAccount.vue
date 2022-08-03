<template>
  <section class="fields">
    <span class="label" style="font-size: 1.875em">退会手続き</span>
  </section>

  <section>
    <div class="fields">
      <span class="label">ユーザー名</span>
      <span class="user">{{ user.name }}</span>
    </div>
    <div class="fields">
      <span class="label">メールアドレス</span>
      <span class="mail">{{ user.email }}</span>
    </div>
  </section>

  <section style="text-align: center; margin: 0">
    <p-button label="次へ" @click="showDialog" class="next_btn" />
  </section>

  <p-dialog
    modal
    :closable="false"
    :visible="dialog"
    style="min-width: 620px; text-align: center"
  >
    <template #header>
      <span class="title">退会してよろしいですか？</span>
    </template>

    <label style="display: block; margin: auto; width: 500px; text-align: left">
      <span class="label" style="font-size: 0.75em">
        パスワードを入力して退会する
      </span>
      <p-input-text
        v-model="password"
        type="password"
        autocomplete="current-password"
        style="width: 100%"
      />
    </label>

    <template #footer>
      <div class="actions">
        <p-button
          label="キャンセル"
          @click="closeDialog"
          class="p-button-outlined"
        />
        <p-button label="退会する" @click="deleteAccount" />
      </div>
    </template>
  </p-dialog>
</template>

<script lang="ts">
import { ToastSeverity } from "primevue/api";
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { deleteUser, User } from "../../util/api";

import PButton from "primevue/button";
import PDialog from "primevue/dialog";
import PInputText from "primevue/inputtext";

import { userKey } from "../../App.vue";
import { route as Home } from "../Index.vue";

const component = defineComponent({
  components: {
    PButton,
    PDialog,
    PInputText,
  },
  data: () => ({
    dialog: false,
    password: "",
    user: inject(userKey) as User,
  }),
  computed: {
    isEmptyPassword() {
      return this.password.length <= 0;
    },
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    deleteAccount() {
      if (this.isEmptyPassword) {
        return
      }
      
      deleteUser(this.user.accountId, { password: this.password }).then(
        () =>
          this.$router.push({ path: Home.path }).then(() =>
            this.$toast.add({
              severity: ToastSeverity.SUCCESS,
              life: 5000,
              summary: "退会しました",
            })
          ),
        () =>
          this.$toast.add({
            severity: ToastSeverity.ERROR,
            life: 5000,
            closable: false,
            summary: "退会できませんでした",
            detail: "パスワードを確認した上でもう一度試してください。",
          })
      );
    },
  },
});

export const route: RouteRecordRaw = {
  path: "/mypage/deleteaccount",
  component,
};
export default component;
</script>

<style scoped>
section {
  margin-left: 280px;
  margin-bottom: 40px;
}

.label {
  color: var(--text-color-secondary);
}

.user,
.mail {
  font-size: 1.5em;
}

.fields .label {
  font-size: 1.5em;
}

.fields .user {
  margin-left: 125px;
}

.fields .mail {
  margin-left: 80px;
}

.next_btn {
  width: 150px;
  height: 50px;
}

.actions {
  text-align: center;
}

.actions button {
  height: 50px;
  margin-right: 40px;
  cursor: pointer;
}

.actions button:last-of-type {
  margin-right: 0;
}

.title {
  text-align: center;
  color: var(--primary-color);
  font-size: 22px;
  flex: 1 1;
}
</style>
