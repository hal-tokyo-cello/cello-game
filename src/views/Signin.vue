<template>
  <h1 style="text-align: center">サインイン</h1>

  <form @submit="Signin">
    <div class="fields">
      <span class="p-float-label spacer">
        <InputText id="email" type="email" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <p v-if="mailFlag" class="p-error">メールアドレスが入力されていません</p>
      <p v-if="mailValFlag" class="p-error">メールアドレスではありません</p>

      <span class="p-float-label spacer">
        <Password v-model="password" id="password" />
        <label for="password">パスワード</label>
      </span>
      <p v-if="passFlag" class="p-error">パスワードが入力されていません</p>
    </div>

    <div class="button-bar">
        <Button label="キャンセル" class="p-button-outlined" />
      <Button label="サインイン" type="submit" />
      </div>
  </form>

  <div class="links">
    <router-link to="/">
      <Button label="パスワードを忘れた" class="p-button-link p-button-sm" />
        </router-link>
    <router-link to="/signup">
      <Button label="初めてご利用の方はこちら" class="p-button-link p-button-sm" />
        </router-link>
      </div>
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