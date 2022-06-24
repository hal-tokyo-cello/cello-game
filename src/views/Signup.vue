<template>
  <main>
    <h1>新規登録</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText id="email" type="text" v-model="value" />
        <label for="username">メールアドレス</label>
      </span>
      <span class="p-float-label spacer">
        <Password id="password" v-model="value11" />
        <label for="password"
          >パスワード
          <span style="font-size: 12px">
            ※半角英数字記号を含む8文字以上32文字以下
          </span>
        </label>
      </span>
      <span class="p-float-label spacer">
        <Password id="checkPass" v-model="value11" />
        <label for="password">確認用パスワード</label>
      </span>
    </div>

    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="サインアップ" />
    </div>
    <div class="link">
      <router-link style="text-decoration: none" to="/login">
        <Button label="サインインはこちら" class="p-button-link p-button-sm" />
      </router-link>
    </div>
  </main>
</template>
<script>
export default {};
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
#password,
#checkPass {
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
  margin-top: 20px;
  text-align: center;
}
</style>