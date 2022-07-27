<template>
  <header>
    <img :src="logo" class="logo" />
    <Avatar :image="avatar" class="mr-2 avatar" size="xlarge" shape="circle" />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>&copy; CELLO 2022</footer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

import Avatar from "primevue/avatar";

import logo from "./assets/img/cello_logo.png";
import avatar from "./assets/img/small.jpeg";

export default defineComponent({
  components: {
    Avatar,
  },
  data() {
    return {
      logo,
      avatar,
    };
  },
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
