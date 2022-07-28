<template>
  <c-form-layout title="ユーザー情報の変更" @submit.prevent="showModal">
    <template #fields>
      <span class="p-float-label">
        <p-password v-model="value1" :feedback="false" class="password" />
        <label for="password">現在のパスワード</label>
      </span>

      <span class="p-float-label">
        <p-password v-model="value2" toggle-mask class="password" />
        <label for="password">新しいパスワード</label>
      </span>

      <span class="p-float-label">
        <p-password v-model="value3" toggle-mask class="password" />
        <label for="password">新しいパスワード</label>
      </span>
    </template>

    <template #action>
      <p-button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <p-button label="登録" type="submit" />
    </template>
  </c-form-layout>

  <c-modal :message="message" v-show="modal" @execute-method="executeMethod" />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import PButton from "primevue/button";
import PPassword from "primevue/password";

import CModal from "../../components/AlertAddr.vue";
import CFormLayout from "../../layout/Form.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    CModal,
    PButton,
    PPassword,
  },
  data() {
    return {
      message: "ユーザー名を変更しました",
      modal: false,
      value: null,
      value1: null,
      value2: null,
      value3: null,
    };
  },
  props: {
    msg: String,
  },
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
          name: this.value,
        };
        axios
          .put(
            process.env.CELLO_API_SERVER + "/users/{accountID}",
            requestBody
          )
          .then((response) => {
            console.log("way");
            // 成功したときの処理はここに記述する
            this.modal = true;
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
    executeMethod(yes: boolean) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/password", component }
export default component
</script>

<style scoped>
</style>