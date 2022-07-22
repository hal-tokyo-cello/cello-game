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
    <div align="right" class="Withdrawal">
      <Button label="▶退会する" class="p-button-outlined withdrawal_btn" />
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
export default {
  data() {
    return {
      username: "セパ拓郎",
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
  margin: 0 auto;
  width: 960px;
}

.box {
  display: flex;
  justify-content: space-between;
}

.image {
  width: 240px;
}

.change {
  width: 720px;
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

.withdrawal_btn {
  margin: 40px 5px 0px 5px;
}
</style>