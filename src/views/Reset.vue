<template>
  <h1 style="text-align: center">パスワード再設定</h1>

  <form @submit="Signup">
    <div class="fields">
      <span class="p-float-label spacer">
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

      <span class="p-float-label spacer">
        <p-password v-model="confPassword" id="checkPass" :feedback="false" />
        <label for="checkPass">確認用パスワード</label>
      </span>
      <p v-if="confPassFlag" class="p-error">
        確認用パスワードが入力されていません
      </p>
    </div>

    <div class="button-bar">
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="サインアップ" type="submit" />
    </div>
  </form>

  <div class="links">
    <router-link style="text-decoration: none" to="/signin">
      <p-button label="サインインはこちら" class="p-button-link p-button-sm" />
    </router-link>
  </div>
</template>

<script>
import PButton from "primevue/button";
import PPassword from "primevue/password";

export default {
  components: {
    PButton,
    PPassword,
  },
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