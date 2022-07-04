<template>
  <div class="main">
    <h1>クエスト一覧画面</h1>
    <div class="wrapper">
      <div class="box" v-for="(list, key) in data" :key="key">
        <div class="title-block">
          <h4 class="title">{{ list.title }}</h4>
        </div>
        <div class="title-tri"></div>

        <p class="genre">{{ list.main }}</p>

        <div class="point-badge">
          <p class="points">
            {{ list.point }}
          </p>
        </div>
      </div>

      <!-- modal -->
      <div class="hello">
        <h1>{{ msg }}</h1>

        <button @click="showModal()">モーダルを表示</button>
        <modal
          :message="message"
          v-show="modal"
          @execute-method="executeMethod"
        ></modal>
      </div>
    </div>
  </div>

  <!-- test -->
</template>

<script>
// test
import Modal from "./modal.vue";

export default {
  name: "HelloWorld",
  components: {
    Modal,
  },
  data() {
    return {
      message: "よろしいですか？",
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
        alert("はい が押されました。");
      } else {
        alert("いいえ が押されました。");
      }
    },
  },
};

// export default {
//   name: "Quest",
//   data() {
//     return {
//       // test
//       data: [
//         {
//           title: "問題タイトル",
//           main: "ジャンル：穴埋め",
//           point: "100",
//         },
//         {
//           title: "問題タイトル",
//           main: "ジャンル：穴埋め",
//           point: "200",
//         },
//         {
//           title: "問題タイトル",
//           main: "ジャンル：穴埋め",
//           point: "300",
//         },
//         {
//           title: "問題タイトル",
//           main: "ジャンル：穴埋め",
//           point: "400",
//         },
//       ],
//     };
//   },
// };
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
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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

/* test */
#overlay {
  /*　要素を重ねた時の順番　*/
  z-index: 1;

  /*　画面全体を覆う設定　*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
