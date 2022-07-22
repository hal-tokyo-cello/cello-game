<template>
  <main>
    <h1>ユーザー情報の変更</h1>
    <div class="input">
      <span class="p-float-label spacer">
        <InputText id="username" type="text" v-model="value" />
        <label for="username">新しいユーザー名</label>
      </span>
    </div>
    <div class="buttonArea">
      <div class="button">
        <Button
          label="キャンセル"
          @click="cancel()"
          class="p-button-outlined"
        />
      </div>
      <Button label="登録" @click="showModal()" />
    </div>
    <modal
      :message="message"
      v-show="modal"
      @execute-method="executeMethod"
    ></modal>
  </main>
</template>

<script>
import Modal from "../components/Alert.vue";
import axios from "axios";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      message: "ユーザー名を変更しました",
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
      if (error) {
        return;
      } else {
        //API処理
        const requestBody = {
          name: this.value,
        };
        axios
          .put(
            import.meta.env.VITE_API_SERVER + "/users/{accountID}",
            requestBody
          )
          .then((response) => {
            console.log("way");
            // 成功したときの処理はここに記述する
            this.modal = true;
          })
          .catch((e) => {
            // レスポンスがエラーで返ってきたときの処理はここに記述する
            console.log("hoge");
            //エラー回避用
            this.$router.push("/ChangeName.vue");
          });
        return;
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