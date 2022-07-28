<template>
  <div class="wrapper">
    <div v-for="(quest, idx) in quests" :key="idx" @click="showModal" class="quest-card">
      <div class="title-box">
        <h4 class="title">{{ quest.title }}</h4>
      </div>
      <div class="title-decoration" />

      <p class="genre">{{ quest.genre }}</p>

      <span class="point-badge">
        {{ quest.experience }}
      </span>
    </div>
  </div>

  <c-modal v-if="modal" :quest="{ quests: 'title' }" @execute-method="executeMethod" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

import CModal from "../../components/QuestConfirmDialog.vue";

interface Quest {
  title: String,
  genre: String,
  experience: Number
}

export default defineComponent({
  name: "Quest",
  components: {
    CModal,
  },
  data() {
    return {
      quests: [] as Quest[],
      modal: false,
    };
  },
  // props: {
  //   msg: String,
  // },
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

    // モーダル表示処理
    showModal() {
      this.modal = true;
    },
    executeMethod(yes: boolean) {
      // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
      this.modal = false;
      if (yes) {
      } else {
      }
    },
  },
  mounted: function () {
    this.getData();
  },
});
</script>

<style scoped>
.wrapper {
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.quest-card {
  width: 377px;
  height: 115px;
  border: 1px solid #fc8c0d;
  margin-top: 40px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.quest-card .title-box {
  margin: 0;
  width: 377px;
  height: 47px;
  background: #fc8c0d 0% 0% no-repeat padding-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.quest-card .title {
  margin-top: 20px;
  text-align: center;
  font: normal normal bold 14px/17px Segoe UI;
  color: #ffffff;
}

.quest-card .title-decoration {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 21px 188.5px 0 188.5px;
  border-color: #fc8c0d transparent transparent transparent;
}

.quest-card .genre {
  margin-top: 1rem;
  text-align: center;
  font: normal normal bold 8px/10px Segoe UI;
  color: hsl(0, 0%, 44%);
}

.quest-card .point-badge {
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
  font: normal normal bold 16px/27px "Tsukushi A Round Gothic";
  letter-spacing: 0px;
  color: white;
}
</style>
