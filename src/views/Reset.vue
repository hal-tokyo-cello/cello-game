<template>
  <main>
    <h1>パスワード再設定</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <Password id="password" v-model="password" />
        <label for="password"
          >新規パスワード
          <span style="font-size: 12px">
            ※半角英数字記号を含む8文字以上32文字以下
          </span>
        </label>
      </span>
      <!-- パスワードエラー -->
      <template v-if="passFlag == true">
        <p class="error">※パスワードが入力されていません</p>
      </template>
      <template v-if="passwordCheckFlag == true">
        <p class="error">※確認用パスワードと一致しません</p>
      </template>
      <span class="p-float-label spacer">
        <Password id="checkPass" v-model="confPassword" :feedback="false" />
        <label for="password">確認用パスワード</label>
      </span>
      <!-- 確認パスワードエラー -->
      <template v-if="confPassFlag == true">
        <p class="error">※確認用パスワードが入力されていません</p>
      </template>
    </div>

    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="サインアップ" @click="Signup()" />
    </div>
    <div class="link">
      <router-link style="text-decoration: none" to="/signin">
        <Button label="サインインはこちら" class="p-button-link p-button-sm" />
      </router-link>
    </div>
  </main>
</template>
<script>
import validator from "validator";
export default {
  data() {
    return {
      password: "",
      confPassword: "",
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
.link {
  margin-top: 20px;
  text-align: center;
}
.error {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #f00;
}
</style>