<template>
  <div id="modal">
    <div id="modal-content" class="modal" @click="del_modal()">
      <p id="modal-message" class="modal__message">{{ message }}</p>
    </div>
    <div id="modal-overlay" @click="del_modal()"></div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["message"],
  methods: {
    del_modal() {
      // マイページトップ画面に遷移
      this.$router.push("../views/Mypage.vue");
    },
  },
};
</script>

<style scoped>
.modal {
  padding: 10px 20px;
  border: 1px solid #ff8c00;
  background: #ffffff;
  z-index: 2;
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 333px;
  transform: translate(-50%, -50%);
}
.modal__message {
  text-align: center;
  color: #ff8c00;
  margin-top: 140px;
  font: normal normal bold 24px/28px Segoe UI;
}

#modal-overlay {
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>