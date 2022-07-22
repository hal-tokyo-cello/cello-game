<template>
  <main>
    <h1>サインイン</h1>
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
      <span class="p-float-label spacer">
        <Password id="password" v-model="password" />
        <label for="password">パスワード</label>
      </span>
      <template v-if="passFlag == true">
        <p class="error">※パスワードが入力されていません</p>
      </template>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="サインイン" @click="Signin()" />
    </div>
    <div class="link">
      <div>
        <router-link style="text-decoration: none" to="/">
          <Button
            label="パスワードを忘れた"
            class="p-button-link p-button-sm"
          />
        </router-link>
      </div>
      <div>
        <router-link style="text-decoration: none" to="/signup">
          <Button
            label="初めてご利用の方はこちら"
            class="p-button-link p-button-sm"
          />
        </router-link>
      </div>
    </div>
  </main>
</template>
<script>
import validator from "validator";
import axios from "axios";
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
        }
        axios.post(import.meta.env.VITE_API_SERVER + "/users/signin", requestBody)
        .then((response) => {
            console.log("way");
            // 成功したときの処理はここに記述する
            this.$router.go({path: '/varification', force: true});
        })
        .catch((e) => {
            // レスポンスがエラーで返ってきたときの処理はここに記述する
            console.log("hoge");
            //エラー回避用
            this.$router.push("/varification")
        });
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
main {
  width: 960px;
  margin: 0 auto;
  padding-top: 70px;
  background: #f8f8f8;
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
  text-align: center;
}

.error {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #f00;
}
</style>