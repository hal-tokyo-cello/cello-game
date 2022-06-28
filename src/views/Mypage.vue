<template>
  <div class="content">
    <div class="top">
      <h1>マイページ</h1>
    </div>

    <div class="box">
      <div class="image">
        <Avatar
          image="/src/assets/img/kimawari.png"
          class="mr-2"
          size="xlarge"
          shape="circle"
        />
      </div>

      <div class="change">
        <div class="username">
          <p>{{ username }}</p>
          <Button label="変更する" class="btn" />
        </div>
        <div class="mail">
          <p>E-mail：{{ mail }}</p>
          <Button label="変更する" class="btn" />
        </div>
        <div class="password">
          <p>password</p>
          <Button label="変更する" class="btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
export default {
  data() {
    return {
      username: "西田果韻",
      mail: "sepatakuro@gmail.com",
    };
  },
  methods: {},
  components: {
    Avatar,
  },
};
</script>

<style>
.content {
  top: 0px;
  left: 0px;
  opacity: 1;
  margin: auto;
  width: 60%;
}

.box {
  display: flex;
  justify-content: space-between;
}

.username {
  display: flex;
  justify-content: space-between;
}

.mail {
  display: flex;
  justify-content: space-between;
}

.password {
  display: flex;
  justify-content: space-between;
}

.btn {
  margin: 5px;
}
</style>