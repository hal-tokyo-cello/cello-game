<template>
  <h1 style="text-align: center">ユーザー情報の変更</h1>

  <form>
    <div class="fields">
      <template v-for="i in 3" :key="i">
        <span class="p-float-label spacer">
          <InputText class="email" id="email" type="text" v-model="mail1" />
          <label for="email">メールアドレス</label>
        </span>
        <p v-if="mailFlag" class="p-error">
          メールアドレスが入力されていません
        </p>
        <p v-if="mailValFlag" class="p-error">メールアドレスではありません</p>
      </template>
    </div>

    <div class="button-bar">
      <Button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <Button label="登録" type="submit" class="p-button" />
    </div>
  </form>
  <modal :message="message" v-show="modal" @execute-method="executeMethod">
  </modal>
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
.button-bar {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
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