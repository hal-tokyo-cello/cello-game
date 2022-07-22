<template>
  <div id="modal">
    <div id="modal-content" class="modal">
      <p id="modal-message" class="modal__message">{{ message }}</p>
      <button class="modal__cancel" @click="returnFalse()">キャンセル</button>
      <button class="modal__btn" @click="returnTrue()">退会する</button>
    </div>
    <div id="modal-overlay"></div>
  </div>
</template>

<script>
import { thisExpression } from "@babel/types";
import axios from "axios";

export default {
  name: "Modal",
  props: ["message"],
  methods: {
    returnFalse() {
      this.$emit("execute-method", false);
    },
    returnTrue() {
      this.$emit("execute-method", true);
      //api処理
      const requestBody = {
        email: thisExpression.mail,
        password: this.password,
      };
      axios.get(import.meta.env.VITE_API_SERVER + );
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
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 333px;
  transform: translate(-50%, -50%);
}

.modal__message {
  color: #d83801;
  margin-top: 100px;
  font-size: 22px;
}

.modal__cancel {
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

.modal__btn {
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