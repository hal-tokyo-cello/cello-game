<template>
  <h1 style="text-align: center">ユーザー情報の変更</h1>

  <form @submit="showModal">
    <div class="fields">
      <span class="p-float-label spacer">
        <Password v-model="value1" :feedback="false" class="password" />
        <label for="password">現在のパスワード</label>
      </span>

      <span class="p-float-label spacer">
        <Password v-model="value2" toggle-mask class="password" />
        <label for="password">新しいパスワード</label>
      </span>

      <span class="p-float-label spacer">
        <Password v-model="value3" toggle-mask class="password" />
        <label for="password">新しいパスワード</label>
      </span>
    </div>
    <div class="button-bar">
      <Button label="キャンセル" @click="cancel" class="p-button-outlined" />
      <Button label="登録" @click="showModal" />
    </div>
  </form>
  <modal :message="message" v-show="modal" @execute-method="executeMethod" />
</template>

<script>
import axios from "axios";
import Modal from "../components/AlertAddr.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      message: "ユーザー名を変更しました",
      modal: false,
      value1: null,
      value2: null,
      value3: null,
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

.fields :deep(input) {
  width: 620px;
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