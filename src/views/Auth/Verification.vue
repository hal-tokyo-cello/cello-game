<template>
  <h1 style="text-align: center">ワンタイムパス入力画面</h1>

  <p style="margin-top: 50px; text-align: center">
    **********に4桁の認証コードを送信しました。
  </p>

  <form>
    <div class="fields">
      <span class="p-float-label spacer">
        <p-input-text id="email" type="email" v-model="value" />
        <label for="email">メール記載の認証コードを入力してください。</label>
      </span>
    </div>

    <div class="button-bar">
      <p-button label="キャンセル" class="p-button-outlined" />
      <p-button label="送信" type="submit" />
    </div>
  </form>
</template>

<script>
import PButton from "primevue/button";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

export default {
  components: {
    PPassword,
    PInputText,
    PButton,
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