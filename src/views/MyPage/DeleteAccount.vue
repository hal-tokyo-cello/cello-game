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
    <p-button label="次へ" @click="showModal" class="next_btn" />
  </section>

  <p-dialog
    modal
    :closable="false"
    v-model:visible="modal"
    style="min-width: 620px; text-align: center"
  >
    <template #header>
      <span class="title">退会してよろしいですか？</span>
    </template>

    <template #footer>
      <div class="actions">
        <p-button label="キャンセル" class="p-button-outlined" />
        <p-button label="退会する" />
      </div>
    </template>
  </p-dialog>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { User } from "../../util/api";

import PButton from "primevue/button";
import PDialog from "primevue/dialog";

import { userKey } from "../../App.vue";

const component = defineComponent({
  components: {
    PButton,
    PDialog,
  },
  data: () => ({
    modal: false,
    user: inject(userKey) as User,
  }),
  props: {
    msg: String,
  },
  methods: {
    showModal() {
      // モーダル表示する際の処理が必要ならここに書く
      this.modal = true;
    },
    executeMethod(yes: boolean) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
      if (yes) {
        alert("退会する が押されました。");
      } else {
        alert("キャンセル が押されました。");
      }
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
