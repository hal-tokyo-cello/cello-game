<template>
  <div class="fields one_d">
    <p class="label" style="font-size: 1.875em">退会手続き</p>
  </div>
  <div class="fields two_d">
    <p class="label" style="font-size: 1.5em">ユーザー名</p>
    <p class="user">User01</p>
  </div>
  <div class="fields three_d">
    <p class="label" style="font-size: 1.5em">メールアドレス</p>
    <p class="mail">example@gmail.co.jp</p>
  </div>
  <div class="fields four_d">
    <p-button label="次へ" @click="showModal" class="next_btn" />
  </div>
  <c-modal :message="message" v-show="modal" @execute-method="executeMethod" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import PButton from "primevue/button";

import CModal from "../../components/Alert.vue";

const component = defineComponent({
  components: {
    CModal,
    PButton,
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
    executeMethod(yes: boolean) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
      if (yes) {
        alert("退会する が押されました。");
      } else {
        alert("キャンセル が押されました。");
      }
    },
  },
});

export const route: RouteRecordRaw = { path: "/mypage/deleteaccount", component }
export default component
</script>

<style scoped>
/* TODO: Rework on styles */
.label {
  color: hsl(0, 0%, 44%);
}

.fields .user {
  margin-left: 125px;
  font-size: 24px;
}

.fields .mail {
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
