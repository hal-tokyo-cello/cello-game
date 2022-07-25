<template>
  <main>
    <div class="Wrapper">
      <h1 class="QuestionHead">組み合わせ問題</h1>
      <div class="QuestionWrapper">
        <div class="LeftContent">
          <div class="QuestionText">
            <img
              src="/src/assets/img/question.png"
              alt="question"
              class="QuestionImage"
            />
            <p>C2のセルにリンゴとバナナの合計を入れよう！</p>
          </div>
          <!-- /.QuestionText -->
          <a href="#" class="ExcelButton">
            <span class="plus">＋</span>
            <p>ファイルダウンロード</p>
          </a>
          <!-- /.ExcelButton -->
          <div class="Box">
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem yellow"></div>
            <div class="BoxItem red"></div>
            <div class="BoxItem yellow"></div>
          </div>
          <!-- /.box -->
          <button class="Answer">解答する</button>
        </div>
        <div class="RightBox">
          <div class="BoxItem red">A2</div>
          <div class="BoxItem red">B2</div>
          <div class="BoxItem red">C2</div>
          <div class="BoxItem red">D2</div>
          <div class="KigouBox">＋</div>
          <div class="KigouBox">−</div>
          <div class="KigouBox">×</div>
          <div class="KigouBox">＝</div>
          <div class="RightButton">
            <button class="Delete">全て消す</button>
            <button class="Return">←</button>
          </div>
        </div>
        <!-- /.RightBox -->
      </div>
      <!-- /.QuestionWrapper -->
    </div>
    <!-- /.Wrapper -->
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
button {
  font-size: 16px;
  color: #ffffff;
  width: 80px;
  height: 32px;
  display: flex;
  border: solid 1px #ffffff;
  justify-content: center;
  align-items: center;
}
.Wrapper {
  width: 960px;
  margin: 0 auto;
  position: relative;
}
.QuestionWrapper {
  display: flex;
}
.QuestionHead {
  font-size: 40px;
  color: #707070;
  padding-top: 70px;
  padding-bottom: 60px;
}
.QuestionText {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}
.QuestionText p {
  color: #545454;
}
a {
  text-decoration: none;
}
.ExcelButton {
  background-color: #107c10;
  width: 220px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  gap: 8px;
  margin-top: 60px;
  margin-bottom: 30px;
}
.plus {
  font-size: 30px;
}
.ExcelText {
  margin-top: -10px;
}
.QuestionImage {
  width: 42px;
  height: 42px;
}
.Box {
  width: 490px;
  border: solid 1px #fc8c0d;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;
}
.BoxItem {
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.red {
  border: solid 1px #ea4307;
}
.yellow {
  border: solid 1px #fdb913;
}
.Answer {
  width: 150px;
  height: 52px;
  background-color: #ea4307;
  margin-left: 340px;
}
.Answer:hover {
  cursor: grab;
  background-color: #ff4400;
}
.RightBox {
  width: 360px;
  height: 360px;
  background-color: #ffffff;
  border: solid 1px;
  margin-left: 110px;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.RightButton {
  display: flex;
  gap: 10px;
  margin-left: 140px;
  margin-top: 40px;
}
.Delete {
  background-color: #fdb913;
  width: 80px;
  height: 40px;
}
.Delete:hover {
  cursor: grab;
  background-color: #ffda7e;
}
.Return {
  background-color: #fdb913;
  width: 40px;
  height: 40px;
}
.Return:hover {
  cursor: grab;
  background-color: #ffda7e;
}
.KigouBox {
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdb913;
  color: #f8f8f8;
  font-size: 30px;
}
</style>
