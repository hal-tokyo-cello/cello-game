<template>
  <p-toast />
  <header>
    <img src="./assets/images/cello_logo.png" class="logo" />
    <router-link :to="MyPage.path">
      <p-avatar
        :image="user.avatar?.iconUrl"
        class="mr-2 avatar"
        size="xlarge"
        shape="circle"
      />
    </router-link>
  </header>

  <main>
    <router-view />
  </main>

  <footer>&copy; CELLO 2022</footer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import PAvatar from "primevue/avatar";
import PToast from "primevue/toast";

import { getUser, User } from "./util/api";

import { route as MyPage } from "./views/MyPage/Mypage.vue";

/**
 * Provide key to inject user across the app.
 */
export const userKey = Symbol();

export default defineComponent({
  components: {
    PAvatar,
    PToast,
  },
  provide() {
    return {
      [userKey]: computed(() => this.user),
    };
  },
  data: () => ({
    MyPage,
    user: {} as User,
  }),
  mounted() {
    getUser("1").then((data) => {
      this.user = data.user;
    });
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
