<template>
  <header>
    <img :src="logo" class="logo" />
    <Avatar
      :image="avatar"
      class="mr-2 avatar"
      size="xlarge"
      shape="circle"
      style="margin: 8px 20px 0 0"
    />
  </header>

  <main><router-view></router-view></main>

  <footer>&copy; CELLO 2022</footer>
</template>

<script>
import Avatar from "primevue/avatar";

import logo from "./assets/img/cello_logo.png";
import avatar from "./assets/img/small.jpeg";

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      logo,
      avatar,
    };
  },
};
</script>

<style scoped>
:deep(#email),
:deep(#checkPass),
:deep(.password) {
  width: 620px;
  height: 70px;
}

header {
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  justify-content: space-between;
}

footer {
  margin-top: auto;
  text-align: center;
  padding: 10px 0;
}

.logo {
  width: 80px;
  height: 80px;
}

.avatar {
  margin-top: 8px;
  margin-right: 20px;
}
</style>
