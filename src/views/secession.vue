<template>
  <main>
    <div id="Secession">
      <div class="secession-content">
        <div class="one_d">
          <p class="procedure">退会手続き</p>
        </div>
        <div class="two_d">
          <p class="user">ユーザー名</p>
          <p class="user_m">User01</p>
        </div>
        <div class="three_d">
          <p class="mail">メールアドレス</p>
          <p class="mail_m">example@gmail.co.jp</p>
        </div>
        <div class="four_d">
          <button class="next_btn" @click="showModal()">次へ</button>
        </div>
        <modal
          :message="message"
          v-show="modal"
          @execute-method="executeMethod"
        ></modal>
      </div>
    </div>
  </main>
</template>

<script>
import Modal from "../components/Alert.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      message: "退会してよろしいですか？",
      modal: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    showModal() {
      // モーダル表示する際の処理が必要ならここに書く
      this.modal = true;
    },
    executeMethod(yes) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
      if (yes) {
        alert("退会する が押されました。");
      } else {
        alert("キャンセル が押されました。");
      }
    },
  },
};
</script>

<style scoped>
.procedure {
  font-size: 30px;
  color: #707070;
}

.user {
  font-size: 24px;
  color: #707070;
}

.user_m {
  margin-left: 125px;
  font-size: 24px;
}

.mail {
  font-size: 24px;
  color: #707070;
}

.mail_m {
  margin-left: 80px;
  font-size: 24px;
}

.cancel_btn {
  display: inline-block;
  margin: 0 auto;
  margin-right: 20px;
  text-decoration: none;
  width: 150px;
  height: 50px;
  text-decoration: none;
  border: solid 1px #ff8c00;
  transition: 0.4s;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  background-color: #ffffff;
}

.next_btn {
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
  width: 150px;
  height: 50px;
  text-decoration: none;
  color: #ffffff;
  border: solid 1px #ff8c00;
  transition: 0.4s;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  background-color: #ff8c00;
}

.one_d {
  margin-left: 200px;
  margin-bottom: 40px;
}

.two_d {
  text-align: center;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-start;
  margin-left: 280px;
}

.three_d {
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  margin-left: 280px;
}

.four_d {
  text-align: center;
}
</style>
