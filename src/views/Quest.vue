<template>
  <div class="main">
    <div class="wrapper">
      <!-- 各クエストを表示するボックス -->
      <div class="box" v-for="(items, key) in quests" :key="key">
        <!-- クエストのタイトル部分 -->
        <div class="title-block">
          <h4 class="title">{{ items.title }}</h4>
        </div>
        <div class="title-tri"></div>

        <!-- クエストのジャンル表示部分 -->
        <p class="genre">{{ items.genre }}</p>

        <!-- クエストの経験値バッジ部分 -->
        <div class="point-badge">
          <p class="points">
            {{ items.experience }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Quest",
  data() {
    return {
      quests: [],
    };
  },
  methods: {
    // api関連
    getData() {
      axios
        // クエスト情報の取得
        .get(
          "https://5355e573-a35a-4859-af9d-475ba909dbb6.mock.pstmn.io/quests"
        )
        //取得成功時
        .then(
          (response) =>
            // console.log(response.data["quests"]),
            (this.quests = response.data["quests"])
        )
        .catch((error) => console.log(error));
    },
  },
  mounted: function () {
    this.getData();
  },
};
</script>

<style>
.main {
  background-color: #f8f8f8;
}
.wrapper {
  width: 799px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}
.box {
  width: 377px;
  height: 115px;
  border: 1px solid #fc8c0d;
  margin-top: 40px;
  overflow: hidden;
  position: relative;
}

/*   box upper   */
.title-block {
  margin: 0;
  width: 377px;
  height: 47px;
  background: #fc8c0d 0% 0% no-repeat padding-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.title-tri {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 21px 188.5px 0 188.5px;
  border-color: #fc8c0d transparent transparent transparent;
}
.title {
  margin-top: 20px;
  text-align: center;
  font: normal normal bold 14px/17px Segoe UI;
  color: #ffffff;
}

/*   box bottom   */
.genre {
  /* width: 100%; */
  margin-top: 1rem;
  text-align: center;
  font: normal normal bold 8px/10px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
}
.point-badge {
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 44px;
  height: 43px;
  background: #71afe5 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.points {
  font: normal normal bold 16px/27px Tsukushi A Round Gothic;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>