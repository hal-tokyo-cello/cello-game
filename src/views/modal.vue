<template>
  <div id="modal">
    <div id="modal-content" class="modal">
      <!-- v-for使って問題の情報を取ってくる？？？ -->
      <p id="modal-message" class="modal__message">{{ message }}</p>
      <p>ジャンル：穴埋め</p>
      <p>🅿︎300　</p>

      <div id="modal-chose">
        <div id="modal-cansel" class="modal__cancel" @click="returnFalse()">
          キャンセル
        </div>
        <div class="modal__btn" @click="returnTrue()">解答へ</div>
      </div>
    </div>
    <div id="modal-overlay" @click="returnFalse()"></div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["message"],
  methods: {
    returnFalse() {
      this.$emit("execute-method", false);
    },
    returnTrue() {
      this.$emit("execute-method", true);
    },
  },
};
</script>

<style scoped>
.modal {
  width: 620px;
  height: 253px;
  background: white;
  z-index: 2;
  display: block;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 6px #00000029;
  border: 1px solid #ff8c00;
}

.modal__message {
  margin-top: 53px;
  margin-bottom: 0px;
  text-align: center;
  font: normal normal bold 21px/25px Segoe UI;
  letter-spacing: 0px;
  color: #ff8c00;
}

#modal-chose {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin: 2rem auto;
}
.modal__cancel {
  width: 150px;
  height: 52px;
  font: normal normal 600 15px/18px Segoe UI;
  letter-spacing: 0px;
  color: #fc8c0d;
  border: 1px solid #fc8c0d;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__cancel:hover {
  cursor: pointer;
  color: rgb(14, 48, 240);
  font-weight: bold;
}
.modal__btn {
  width: 150px;
  height: 52px;
  background: #fc8c0d 0% 0% no-repeat padding-box;
  cursor: pointer;
  font: normal normal 600 15px/18px Segoe UI;
  letter-spacing: 0px;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}
#modal-overlay {
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>