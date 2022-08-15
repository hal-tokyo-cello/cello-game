<template>
  <main>
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
            src="/src/assets/img/beforepan.png"
            alt="Avatar"
            class="AvatarIcon return"
          />
        </div>
        <!-- /.AvatarWrap -->
      </div>
      <!-- /.Wrapper -->
    </div>
  </main>
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
  height: 90vh;
  background-image: url("/src/assets/img/background.png");
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
  margin-top: 280px;
}
.AvatarIcon {
  width: 288px;
  height: 288px;
}
@keyframes return {
  25% {
    top: 30px;
  }
  50% {
    left: 200px;
  }
  75% {
    top: -30px;
  }
  100% {
    left: -200px;
  }
}

.return {
  position: relative;
  left: 0px;
  top: 0;

  animation-name: return;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
</style>
