<template>
  <c-form-layout title="パスワード再設定" @submit.prevent="Signup">
    <template #fields>
      <span class="p-float-label">
        <p-password v-model="password" id="password" />
        <label for="password">
          新規パスワード
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
        <p-password v-model="confPassword" id="checkPass" :feedback="false" />
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

import PButton from "primevue/button";
import PPassword from "primevue/password";

import CFormLayout from "../layout/Form.vue";

export default defineComponent({
  components: {
    CFormLayout,
    PButton,
    PPassword,
  },
  data() {
    return {
      password: "",
      confPassword: "",
      mailFlag: false,
      mailValFlag: false,
      passFlag: false,
      confPassFlag: false,
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
            this.$router.push("/");
            return;
          } else {
            this.passwordCheckFlag = true;
            error = true;
          }
        }
      }
      return;
    },
  },
});
</script>

<style scoped>
</style>