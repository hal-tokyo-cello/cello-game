<template>
  <h1>マイページ</h1>

  <div style="display: flex; justify-content: space-between">
    <div style="flex: 1 1">
      <p-avatar :image="user.avatar?.iconUrl" size="xlarge" shape="circle" />
    </div>

    <div style="flex: 3 3">
      <div class="change">
        <p><span class="label">ユーザー名</span>{{ user.name }}</p>
        <p-button label="変更する" />
      </div>
      <div class="change">
        <p><span class="label">メールアドレス</span> {{ user.email }}</p>
        <p-button label="変更する" />
      </div>
      <div class="change">
        <p>パスワード</p>
        <p-button label="変更する" />
      </div>
    </div>
  </div>

  <div style="float: right; margin-top: 40px; padding-right: 5px">
    <p-button label="▶退会する" class="p-button-outlined" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { User } from "../../util/api";

import PAvatar from "primevue/avatar";
import PButton from "primevue/button";

import { userKey } from "../../App.vue";

const component = defineComponent({
  components: {
    PAvatar,
    PButton,
  },
  data() {
    return {
      user: inject<User>(userKey) as User,
    };
  },
  computed: {
    avatarIcon() {
      return this.user.avatar.iconUrl ?? "";
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage", component };
export default component;
</script>

<style scoped>
span.label::after {
  content: "： ";
}
.change {
  display: flex;
  justify-content: space-between;
}

.change button {
  margin: 5px;
}

:deep(button) {
  width: 120px;
}
</style>
