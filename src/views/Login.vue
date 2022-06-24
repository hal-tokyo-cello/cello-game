<template>
  <main>
    <h1>ログイン</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText id="email" type="text" v-model="value" />
        <label for="email">メールアドレス</label>
      </span>
      <span class="p-float-label spacer">
        <Password id="password" v-model="value11" />
        <label for="password">パスワード</label>
      </span>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="サインイン" />
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
</style>