<template>
  <c-form-layout title="新規登録" @submit.prevent="Signup">
    <template #fields>
      <span class="p-float-label">
        <p-input-text id="email" type="email" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <p v-if="mailFlag" class="p-error">メールアドレスが入力されていません</p>
      <p v-if="mailValFlag" class="p-error">メールアドレスではありません</p>

      <span class="p-float-label">
        <p-password v-model="password" id="password" />
        <label for="password">
          パスワード
          <span style="font-size: 12px">
            ※半角英数字記号を含む8文字以上32文字以下
          </span>
        </label>
      </span>
      <p v-if="passFlag" class="p-error">パスワードが入力されていません</p>
      <p v-if="passwordCheckFlag" class="p-error">
        確認用パスワードと一致しません
      </p>

      <span class="p-float-label">
        <p-password v-model="confPassword" id="checkPass" />
        <label for="checkPass">確認用パスワード</label>
      </span>
      <p v-if="confPassFlag" class="p-error">
        確認用パスワードが入力されていません
      </p>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="サインアップ" type="submit" />
    </template>

    <template #links>
      <router-link style="text-decoration: none" to="/signin">
        <p-button label="サインインはこちら" class="p-button-link p-button-sm" />
      </router-link>
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import validator from "validator";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import CFormLayout from "../../layout/Form.vue";

export default defineComponent({
  components: {
    CFormLayout,
    PButton,
    PInputText,
    PPassword,
  },
  data() {
    return {
      mail: "",
      password: "",
      confPassword: "",
      mailFlag: false,
      passFlag: false,
      confPassFlag: false,
      mailValFlag: false,
      passwordCheckFlag: false,
    };
  },
  methods: {
    Signup() {
      var error = false;
      this.mailFlag = false;
      this.passFlag = false;
      this.mailValFlag = false;
      this.confPassFlag = false;
      this.passwordCheckFlag = false;

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
      //パスワード入力判定
      if (this.password.length == 0) {
        this.passFlag = true;
        error = true;
      } else {
        //確認パスワード入力判定
        if (this.confPassword.length == 0) {
          this.confPassFlag = true;
          error = true;
        } else {
          if (this.password == this.confPassword) {
            //API処理
          } else {
            this.passwordCheckFlag = true;
            error = true;
          }
        }
      }
      if (error) {
        return;
      } else {
        //API処理
        this.$router.push("/varification");
        return;
      }
    },
  },
});
</script>

<style scoped>
</style>