<template>
  <main>
    <h1>パスワード再設定</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText id="email" type="text" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <template v-if="mailFlag == true">
        <p class="error">※メールアドレスが入力されていません</p>
      </template>
      <template v-if="mailValFlag == true">
        <p class="error">※メールアドレスではありません</p>
      </template>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="次へ" @click="Signin()" />
    </div>
  </main>
</template>
<script>
import validator from "validator";
export default {
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
h1 {
  text-align: center;
}
.buttonArea {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.input {
  width: 600px;
  margin: 0 auto;
}
.button {
  margin-right: 16px;
}
.spacer {
  margin-top: 50px;
}
.error {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #f00;
}
#email {
  width: 600px;
}
</style>