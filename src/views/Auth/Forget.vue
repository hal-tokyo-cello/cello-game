<template>
  <h1 style="text-align: center">パスワード再設定</h1>

  <form @submit="Signin">
    <div class="fields">
      <span class="p-float-label spacer">
        <p-input-text id="email" type="text" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <p v-if="mailFlag" class="p-error">メールアドレスが入力されていません</p>
      <p v-if="mailValFlag" class="p-error">メールアドレスではありません</p>
    </div>

    <div class="button-bar">
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="次へ" type="submit" />
    </div>
  </form>
</template>

<script>
import validator from "validator";

import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

export default {
  components: {
    PPassword,
    PInputText,
    PButton,
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
      if (this.password.length == 0) {
        this.passFlag = true;
        error = true;
      }
      if (error) {
        return;
      } else {
        //API処理
        return;
      }
    },
  },
};
</script>

<style scoped>
.fields {
  width: 620px;
  margin: auto;
}

.fields p.p-error::before {
  content: "※";
}

.fields :deep(*) {
  width: 620px;
}

.fields :deep(input) {
  height: 70px;
}

.button-bar {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.button-bar button {
  margin: 0 16px;
}

.links {
  text-align: center;
}

.links a {
  display: block;
  min-width: 200px;
  text-decoration: none;
}

.spacer {
  margin-top: 50px;
}
</style>