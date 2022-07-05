<template>
  <main>
    <h1>ユーザー情報の変更</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <p class="new">新しいユーザー名</p>
        <InputText id="username" type="text" v-model="value" />
        <label for="username">Username</label>
      </span>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button label="キャンセル" class="p-button-outlined" />
      </div>
      <Button label="登録" />
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
.new {
  font-size: 15px;
  color: #707070;
}
#username {
  width: 620px;
  height: 70px;
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
Button {
  width: 150px;
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