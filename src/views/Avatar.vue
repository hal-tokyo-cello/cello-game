<template>
  <div class="HomeBack">
    <div class="Wrapper">
      <div class="LevelWrap">
        <p class="LevelText">Lv.12</p>
        <div class="LevelPoint">
          <span class="LevelGraf"></span>
        </div>
        <!-- /.LevelPoint -->
        <p class="LevelStatus">235/600</p>
      </div>
      <!-- /.LevelWrap -->
      <div class="ButtonWrap">
        <button class="ButtonItem">アイテム</button>
        <button class="ButtonAdvance">進化</button>
      </div>
      <!-- /.ButtonWrap -->
      <div class="AvatarWrap">
        <img
          src="../../src/assets/images/beforepan.png"
          alt="Avatar"
          class="AvatarIcon return"
        />
      </div>
      <!-- /.AvatarWrap -->
    </div>
    <!-- /.Wrapper -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

const component = defineComponent({});

export const route: RouteRecordRaw = { path: "/avatar", component };
export default component;
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
.HomeBack {
  background-image: url("../../src/assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.Wrapper {
  width: 790px;
  margin: 0 auto;
  position: relative;
}
.LevelText {
  font-size: 24px;
  padding-top: 40px;
  padding-bottom: 20px;
}
.LevelPoint {
  width: 250px;
  height: 12px;
  background-color: #f4f4f4;
  position: relative;
}
.LevelGraf {
  width: 100px;
  height: 12px;
  background-color: #fc8c0d;
  position: absolute;
}
.LevelStatus {
  font-size: 16px;
  padding-top: 6px;
}
.ButtonWrap {
  display: flex;
  gap: 20px;
  position: absolute;
  right: 0;
  margin-top: -30px;
}
.ButtonItem {
  background-color: #fc8c0d;
}
.ButtonItem:hover {
  background-color: #ffb900;
  cursor: grab;
}
.ButtonAdvance {
  background-color: #ea4307;
}
.ButtonAdvance:hover {
  background-color: #ff2f00;
  cursor: grab;
}
.AvatarWrap {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.AvatarIcon {
  width: 288px;
  height: 288px;
}
@keyframes wandering {
  0% {
    top: 36px;
    left: 263px;
  }
  25% {
    top: -62px;
    left: 275px;
  }
  50% {
    top: -83px;
    left: -85px;
  }
  75% {
    top: 0px;
    left: -200px;
  }
  100% {
    top: 36px;
    left: 263px;
  }
}

.return {
  position: relative;
  top: 0;
  left: 0;

  animation-name: wandering;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
