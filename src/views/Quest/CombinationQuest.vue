<template>
  <h1>組み合わせ問題</h1>

  <div style="display: flex; justify-content: space-between">
    <div>
      <div class="question-text">
        <div class="question-badge">Q</div>
        <span>C2のセルにリンゴとバナナの合計を入れよう！</span>
      </div>

      <button class="excel-download">
        <span class="icon">＋</span>
        <span>ファイルダウンロード</span>
      </button>

      <div class="answer-field">
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box yellow"></div>
        <div class="answer-box red"></div>
        <div class="answer-box yellow"></div>
      </div>

      <button class="answer">解答する</button>
    </div>

    <div class="option-field">
      <div class="answer-box red">A2</div>
      <div class="answer-box red">B2</div>
      <div class="answer-box red">C2</div>
      <div class="answer-box red">D2</div>
      <div class="answer-box symbol">＋</div>
      <div class="answer-box symbol">−</div>
      <div class="answer-box symbol">×</div>
      <div class="answer-box symbol">＝</div>
      <div class="button-bar">
        <button class="clear">全て消す</button>
        <button class="backspace">←</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style scoped>
button {
  font-size: 16px;
  color: white;
  width: 80px;
  height: 32px;
  border: none;
  cursor: pointer;
  position: relative;
}

button:hover::before {
  content: "";
  position: absolute;
  top: -1%;
  left: -1%;
  width: 102%;
  height: 102%;
  background: hsl(0, 0%, 75%);
  mix-blend-mode: hard-light;
}

h1 {
  font-size: 40px;
  color: #707070;
  margin: 70px 0 60px;
}

.question-text {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.question-text span {
  margin-left: 20px;
  color: #545454;
}

.excel-download {
  background-color: #107c10;
  width: 220px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 30px;
}

.excel-download .icon {
  margin-right: 8px;
  font-size: 30px;
}

.question-badge {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding-bottom: 4px;
  background-image: url(../../assets/images/question.png);
  color: white;
}

.answer-field {
  width: 490px;
  border: solid 1px #fc8c0d;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;
}

.answer-box {
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer-box.red {
  border: solid 1px #ea4307;
}

.answer-box.yellow {
  border: solid 1px #fdb913;
}

.answer-box.symbol {
  background-color: #fdb913;
  color: #f8f8f8;
  font-size: 30px;
}

.answer {
  width: 150px;
  height: 52px;
  background-color: #ea4307;
  margin-left: 340px;
}

.answer:hover {
  background-color: #ff4400;
}

.option-field {
  width: 360px;
  height: 360px;
  background-color: white;
  border: solid 1px;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.option-field .button-bar {
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
}

.clear {
  background-color: #fdb913;
  width: 80px;
  height: 40px;
}

.backspace {
  background-color: #fdb913;
  margin-left: 10px;
  width: 40px;
  height: 40px;
}
</style>
