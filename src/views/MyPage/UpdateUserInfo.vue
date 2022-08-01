<template>
  <c-form-layout title="ユーザー情報の変更">
    <template #fields>
      <template v-for="i in 3" :key="i">
        <span class="p-float-label">
          <p-input-text class="email" id="email" type="text" v-model="mail1" />
          <label for="email">メールアドレス</label>
        </span>
        <p v-if="mailFlag" class="p-error">
          メールアドレスが入力されていません
        </p>
        <p v-if="mailValFlag" class="p-error">メールアドレスではありません</p>
      </template>
    </template>

    <template #action>
      <p-button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <p-button label="登録" type="submit" class="p-button" />
    </template>
  </c-form-layout>

  <c-modal :message="message" v-show="modal" @execute-method="executeMethod" />
</template>

<script lang="ts">
import validator from "validator";
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";

import CModal from "../../components/AlertAddr.vue";
import CFormLayout from "../../layout/Form.vue";

const component = defineComponent({
  components: {
    CFormLayout,
    CModal,
    PButton,
    PInputText,
  },
  data() {
    return {
      mail: "",
      mail1: "",
      mail2: "",
      mail3: "",
      mailFlag: false,
      mailValFlag: false,
      message: "メールアドレスを変更しました",
      modal: false,
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
      // モーダル表示する際の処理が必要ならここに書く
      this.modal = true;

      // mailcheck
      var error = false;
      this.mailFlag = false;
      this.mailValFlag = false;
      //入力判定
      if (this.mail.length) {
        if (validator.isEmail(this.mail)) {
        } else {
          this.mailValFlag = true;
          error = true;
        }
      } else {
        this.mailFlag = true;
        error = true;
      }
    },
    executeMethod(yes: boolean) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/update", component }
export default component
</script>

<style scoped>
</style>