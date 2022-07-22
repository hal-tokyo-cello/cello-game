<template>
  <main>
    <h1>ユーザー情報の変更</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText class="email" type="text" v-model="mail1" />
        <label for="email">メールアドレス</label>
      </span>
      <template v-if="mailFlag == true">
        <p class="error">※メールアドレスが入力されていません</p>
      </template>
      <template v-if="mailValFlag == true">
        <p class="error">※メールアドレスではありません</p>
      </template>
      <span class="p-float-label spacer">
        <InputText class="email" type="text" v-model="mail2" />
        <label for="email">メールアドレス</label>
      </span>
      <template v-if="mailFlag == true">
        <p class="error">※メールアドレスが入力されていません</p>
      </template>
      <template v-if="mailValFlag == true">
        <p class="error">※メールアドレスではありません</p>
      </template>
      <span class="p-float-label spacer">
        <InputText class="email" type="text" v-model="mail3" />
        <label for="email">メールアドレス</label>
      </span>
      <template v-if="mailFlag == true">
        <p class="error">※メールアドレスが入力されていません</p>
      </template>
      <template v-if="mailValFlag == true">
        <p class="error">※メールアドレスではありません</p>
      </template>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button
          label="キャンセル"
          @click="cancel()"
          class="p-button-outlined"
        />
      </div>
      <Button label="登録" @click="showModal()" class="p-button" />
    </div>
    <modal
      :message="message"
      v-show="modal"
      @execute-method="executeMethod"
    ></modal>
  </main>
</template>

<script>
import Modal from "../components/AlertAddr.vue";
import validator from "validator";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      mail1: "",
      mail2: "",
      mail3: "",
      mailFlag: false,
      mailValFlag: false,
      message: "メールアドレスを変更しました",
      modal: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    cancel() {
      this.$router.push("./Mypage.vue");
    },
    showModal() {
      // モーダル表示する際の処理が必要ならここに書く
      this.modal = true;

      // mailcheck
      var error = false;
      this.mailFlag = false;
      this.mailValFlag = false;
      //入力判定
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
    },
    executeMethod(yes) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
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
.email {
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