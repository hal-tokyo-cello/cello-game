<template>
  <div id="modal">
    <div id="modal-content" class="modal">
      <p id="modal-message" class="modal__message">{{ message }}</p>
      <span id="modal-cansel" class="modal__cancel" @click="returnFalse()">
        キャンセル
      </span>
      <button class="modal__btn" @click="returnTrue()">解答へ</button>
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
  padding: 10px 20px;
  background: #faebd7;
  z-index: 2;
  display: block;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.modal__message {
  margin-top: 10px;
}

.modal__cancel {
  margin-right: 30px;
  font-size: 15px;
}

.modal__cancel:hover {
  cursor: pointer;
  color: rgb(14, 48, 240);
  font-weight: bold;
}

.modal__btn {
  display: inline-block;
  margin: 30px auto;
  text-decoration: none;
  width: 80px;
  height: 30px;
  text-decoration: none;
  color: #000000;
  border-radius: 3px;
  transition: 0.4s;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  background-color: #faebd7;
}

.modal__btn:hover {
  color: white;
  cursor: pointer;
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