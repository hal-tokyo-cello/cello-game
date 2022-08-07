<template>
  <c-form-layout title="ユーザー情報の変更" @submit.prevent="showModal">
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
import axios from "axios";
import { ToastSeverity } from "primevue/api";
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { User } from "../../util/api";

import PButton from "primevue/button";
import PPassword from "primevue/password";

import { userKey } from "../../App.vue";
import CFormLayout from "../../layout/Form.vue";

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
  methods: {
    cancel() {
      this.$router.push("./Mypage.vue");
    },
    showModal() {
      const error = false; // FIX: error means something else

      if (error) {
        return;
      } else {
        //API処理
        const requestBody = {
          name: this.user.name,
        };
        axios
          .put(process.env.CELLO_API_SERVER + "/users/{accountID}", requestBody)
          .then((response) => {
            console.log("way");
            // 成功したときの処理はここに記述する
            this.$toast.add({
              severity: ToastSeverity.SUCCESS,
              life: 3000,
              summary: "ユーザー名を変更しました",
            });
          })
          .catch((e) => {
            // レスポンスがエラーで返ってきたときの処理はここに記述する
            console.log("hoge");
            //エラー回避用
            this.$router.push("/ChangeName.vue");
          });
        return;
      }
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/password", component };
export default component;
</script>

<style scoped></style>
