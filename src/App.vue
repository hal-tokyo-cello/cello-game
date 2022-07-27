<template>
  <header>
    <img src="./assets/images/cello_logo.png" class="logo" />
    <p-avatar :image="userIcon" class="mr-2 avatar" size="xlarge" shape="circle" />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>&copy; CELLO 2022</footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import PAvatar from "primevue/avatar";

import userIcon from "./assets/images/small.jpeg"

export default defineComponent({
  components: {
    PAvatar,
  },
  data() {
    return {
      userIcon
    }
  }
});
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  justify-content: space-between;
}

main {
  width: 960px;
  margin: 0 auto;
}

footer {
  text-align: center;
  padding: 10px 0;
}

.logo {
  width: 80px;
  height: 80px;
}

.avatar {
  margin: 8px 20px 0 0;
}
</style>
