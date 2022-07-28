<template>
  <c-form-layout title="サインイン" @submit.prevent="Signin">
    <template #fields>
      <span class="p-float-label">
        <p-input-text id="email" type="email" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <p v-if="mailFlag" class="p-error">メールアドレスが入力されていません</p>
      <p v-if="mailValFlag" class="p-error">メールアドレスではありません</p>

      <span class="p-float-label">
        <p-password v-model="password" id="password" />
        <label for="password">パスワード</label>
      </span>
      <p v-if="passFlag" class="p-error">パスワードが入力されていません</p>
    </template>

    <template #action>
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="サインイン" type="submit" />
    </template>

    <template #links>
      <router-link to="/">
        <p-button label="パスワードを忘れた" class="p-button-link p-button-sm" />
      </router-link>
      <router-link to="/signup">
        <p-button label="初めてご利用の方はこちら" class="p-button-link p-button-sm" />
      </router-link>
    </template>
  </c-form-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
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
      mailFlag: false,
      passFlag: false,
      mailValFlag: false,
    };
  },
  methods: {
    Signin() {
      var error = false;
      this.mailFlag = false;
      this.passFlag = false;
      this.mailValFlag = false;
      //入力判定
      //メールアドレス
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
      //パスワード
      if (this.password.length == 0) {
        this.passFlag = true;
        error = true;
      }
      if (error) {
        return;
      } else {
        //API処理
        const requestBody = {
          email: this.mail,
          password: this.password,
        };
        axios
          .post(process.env.CELLO_API_SERVER + "/users/signin", requestBody)
          .then((response) => {
            console.log("way");
            // 成功したときの処理はここに記述する
            this.$router.push({ path: "/varification", force: true });
          })
          .catch((e) => {
            // レスポンスがエラーで返ってきたときの処理はここに記述する
            console.log("hoge");
            //エラー回避用
            this.$router.push("/varification");
          });
        return;
      }
    },
  },
});
</script>

<style scoped>
</style>