<template>
  <main>
    <h1>ワンタイムパス入力画面</h1>
    <p class="text">**********に4桁の認証コードを送信しました。</p>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText id="email" type="text" v-model="value" />
        <label for="email">メール記載の認証コードを入力してください。</label>
      </span>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="送信" />
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  text-align: center;
}
.text {
  margin-top: 50px;
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

#email {
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