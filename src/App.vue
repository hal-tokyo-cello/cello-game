<template>
  <div class="wrap">
    <header>
      <img src="/src/assets/img/cello_logo.png" alt="logo" />
      <div class="avatar">
        <Avatar
          image="/src/assets/img/small.jpeg"
          class="mr-2"
          size="xlarge"
          shape="circle"
        />
      </div>
    </header>
    <router-view></router-view>
    <footer>©cello2022</footer>
  </div>
</template>
<script>
import Avatar from "primevue/avatar";

export default {
  components: {
    Avatar,
  },
};
</script>
<style>
.wrap {
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
header img {
  width: 80px;
  height: 80px;
}
header .avatar {
  margin-top: 8px;
  margin-right: 20px;
}
footer {
  margin-top: auto;
  text-align: center;
  padding: 10px 0;
}
</style>
