<template>
  <main>
    <h1>ログイン</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText id="email" type="text" v-model="mail" />
        <label for="email">メールアドレス</label>
      </span>
      <template v-if="mailFlag == true">
        <p class="error">※メールアドレスが入力されていません</p>
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
export default {
  data() {
    return {
      mail: "",
      password: "",
      mailFlag: false,
      passFlag: false,
    };
  },
  methods: {
    Signin() {
      this.mailFlag = false;
      this.passFlag = false;
      if (this.mail.length && this.password.length) {
      } else {
        if (this.mail.length == 0) {
          this.mailFlag = true;
          if (this.password.length == 0) {
            this.passFlag = true;
          }
        } else {
          this.passFlag = true;
        }
      }
    },
  },
};
</script>
<style>
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

#email,
#password {
  width: 600px;
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