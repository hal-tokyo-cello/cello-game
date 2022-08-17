<template>
  <div class="home">
    <div class="home-wrapper">
      <div>
        <span class="level-text">{{ user.avatar.level }}</span>
        <meter
          :value="user.avatar.totalExp"
          :max="user.avatar.levelMax"
          class="level-bar"
        />
        <span class="level-number">
          {{ `${user.avatar.totalExp} / ${user.avatar.levelMax}` }}
        </span>
      </div>

      <div class="buttons">
        <p-button disabled="disabled" class="item">アイテム</p-button>
        <p-button disabled="disabled" class="evolve">進化</p-button>
      </div>

      <div class="living">
        <img :src="user.avatar.imageUrl" class="avatar" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { RouteRecordRaw } from "vue-router";

import { User } from "../util/api";

import PButton from "primevue/button";

import { userKey } from "../App.vue";

const component = defineComponent({
  components: {
    PButton,
  },
  data: () => ({
    user: inject(userKey) as User,
  }),
});

export const route: RouteRecordRaw = { path: "/avatar", component };
export default component;
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.home {
  background: no-repeat center
    url("../../src/assets/images/avatar-background.png");
  background-size: cover;
}

.home-wrapper {
  width: 790px;
  margin: 0 auto;
  position: relative;
}

.level-text {
  display: block;
  font-size: 24px;
  padding: 40px 0 20px;
}

.level-text::before {
  content: "Lv. ";
}

.level-bar {
  width: 250px;
  height: 24px;
}

meter.level-bar::-webkit-meter-bar {
  border-radius: 0;
  border: none;
}

meter.level-bar::-webkit-meter-optimum-value {
  background-color: #fc8c0d;
}

.level-number {
  display: block;
  font-size: 16px;
  margin-top: 6px;
}

.buttons {
  position: absolute;
  right: 0;
  margin-top: -32px;
}

.buttons :last-child {
  margin-left: 20px;
}

.buttons button {
  width: 80px;
  height: 32px;
  display: inline;
  border: solid 1px #ffffff;
  font-size: 16px;
  cursor: grab;
}

button.item {
  background-color: #fc8c0d;
}

button.item:hover {
  background-color: #ffb900;
}

button.evolve {
  background-color: #ea4307;
}

button.evolve:hover {
  background-color: #ff2f00;
}

.living {
  text-align: center;
  margin-top: 188px;
}

.avatar {
  position: relative;
  top: 0;
  left: 0;

  width: 288px;
  height: 288px;

  animation-name: wandering;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
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
</style>
