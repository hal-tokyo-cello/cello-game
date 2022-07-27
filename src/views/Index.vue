<template>
  <main>
    <section class="section1">
      <h1 class="head">Hello !! Excel !!</h1>
      <h2 class="subHead">Celloを使えばゲーム感覚で楽しくExcelを学べるよ</h2>
      <h2 class="subHead2">さあ！Celloをはじめてみよう！</h2>
      <router-link style="text-decoration: none" to="/Signup">
        <p-button label="はじめてみる" class="button" />
      </router-link>
    </section>

    <section class="section2">
      <div class="sectionFriend">
        <h1 class="sectionHead">CELLO</h1>
        <h2 class="sectionHead2">へようこそ</h2>
      </div>

      <img src="/src/assets/img/pan1.png" alt="quiz" class="pan1" />
      <img src="/src/assets/img/pan2.png" alt="quiz" class="pan2" />
      <div class="imageWrap">
        <img src="/src/assets/img/quiz.png" alt="quiz" class="quizImg" />
      </div>
    </section>

    <section class="section3">
      <h2 class="section3Head">問題を解いてアバターを進化させよう！</h2>
      <div class="section3Img">
        <img src="/src/assets/img/doragon1.png" alt="doragon" class="doragon1" />
        <img src="/src/assets/img/sankaku.png" alt="sankaku" class="sankaku" />
        <img src="/src/assets/img/doragon2.png" alt="doragon" class="doragon2" />
      </div>

      <div class="section3Mon">
        <h2 class="section3Head2">レベルに合わせた問題でレベルを上げよう！</h2>

        <div class="section3Mon1">
          <img src="/src/assets/img/mon1.png" alt="mon" class="mon1" />
          <div class="monCenter">
            <p class="monText">組み合わせ問題</p>
          </div>
        </div>

        <div class="section3Mon2">
          <div class="monCenter2">
            <p class="monText">４択問題</p>
          </div>
          <img src="/src/assets/img/mon3.png" alt="mon" class="mon2" />
        </div>

        <div class="section3Mon3">
          <img src="/src/assets/img/mon2.png" alt="mon" class="mon1" />
          <div class="monCenter">
            <p class="monText">穴埋め問題</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section4">
      <h1 class="section4Head">さっそくはじめてみよう</h1>

      <div class="btnWrap">
        <router-link style="text-decoration: none" to="/Signup">
          <p-button label="はじめてみる" class="button2" />
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

import PButton from "primevue/button";

export default defineComponent({
  components: {
    PButton,
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

button {
  font-size: 24px;
  background-color: #fc8c0d;
  color: #ffffff;
  height: 80px;
  width: 240px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: #ffb900;
  cursor: grab;
}

.section1 {
  width: 960px;
  margin: 0 auto;
  padding-top: 70px;
  background: #f8f8f8;
}

.head {
  font-size: 96px;
  color: #ffb900;
  margin-left: 20px;
  margin-top: 60px;
}

.subHead {
  font-size: 32px;
  margin-top: 100px;
}

.subHead2 {
  font-size: 32px;
  margin-top: 60px;
}

.button {
  margin-top: 40px;
  margin-left: 600px;
  margin-bottom: 130px;
}

.section2 {
  background-color: #ffb900;
  height: 648px;
  position: relative;
}

.sectionFriend {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.sectionHead {
  font-size: 166px;
  color: #ffffff;
}

.sectionHead2 {
  font-size: 100px;
  color: #ffffff;
  margin-top: 80px;
  margin-left: 8px;
}

.imageWrap {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.pan1 {
  position: absolute;
  margin-left: 190px;
  margin-top: 140px;
}

.pan2 {
  position: absolute;
  right: 0;
  margin-right: 140px;
  margin-top: -70px;
}

.section3 {
  height: 1700px;
  text-align: center;
}

.section3Head {
  margin-top: 80px;
  font-size: 32px;
}

.section3Img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  gap: 60px;
}

.section3Head2 {
  margin-top: 160px;
  font-size: 32px;
  margin-bottom: 60px;
}

.mon1 {
  width: 620px;
  height: 310px;
  left: 0;
  border: solid 1px #dddddd;
}

.section3Mon {
  width: 960px;
  margin: 0 auto;
}

.section3Mon1 {
  display: flex;
}

.monText {
  font-size: 24px;
}

.monCenter {
  display: flex;
  align-items: center;
  margin-left: 80px;
}

.section3Mon2 {
  display: flex;
  margin-left: 70px;
  margin-top: 30px;
}

.mon2 {
  width: 620px;
  height: 310px;
  margin-left: auto;
  border: solid 1px #dddddd;
}

.monCenter2 {
  display: flex;
  align-items: center;
  margin-left: 50px;
}

.section3Mon3 {
  display: flex;
  margin-top: 30px;
}

.section4 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 160px;
}

.section4Head {
  font-size: 32px;
}

.button2 {
  margin-top: 60px;
  margin-bottom: 20px;
  margin-bottom: 130px;
  border: none;
}

.btnWrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>