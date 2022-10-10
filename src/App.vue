<template>
  <p-toast />
  <header>
    <router-link :to="!!user ? Quests.path : ''">
      <img src="./assets/images/cello_logo.png" class="logo" />
    </router-link>
    <router-link v-if="!!user" :to="AvatarR.path" style="float: right">
      <p-avatar
        :image="user.avatar?.iconUrl"
        class="mr-2 avatar"
        size="xlarge"
        shape="circle"
      />
    </router-link>
  </header>

  <main @update:user="(user: User) => reloadUser(user.accountId)">
    <router-view />
  </main>

  <footer>&copy; CELLO 2022</footer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import PAvatar from "primevue/avatar";
import PToast from "primevue/toast";

import { getUser, User } from "./util/api";

import { route as Quests } from "./views/Quest/QuestOverview.vue";

import { components as AuthViews } from "./views/Auth";
import { verifiedUser } from "./views/Auth/Verification.vue";
import { default as Avatar, route as AvatarR } from "./views/Avatar.vue";
import { default as Index } from "./views/Index.vue";
import { components as MyPageViews } from "./views/MyPage";
import { components as QuestViews } from "./views/Quest";

/**
 * Provide key to inject user across the app.
 */
export const userKey = Symbol();

export default defineComponent({
  components: {
    PAvatar,
    PToast,
    ...AuthViews,
    ...MyPageViews,
    ...QuestViews,
    Avatar,
    Index,
  },
  provide() {
    return {
      [userKey]: computed(() => this.user),
    };
  },
  data: () => ({
    AvatarR,
    Quests,
    user: undefined as User | undefined,
  }),
  methods: {
    reloadUser(userId: string) {
      getUser(userId).then((data) => (this.user = data.user));
    },
  },
  async mounted() {
    const userId = localStorage.getItem(verifiedUser);
    this.user = !!userId ? (await getUser(userId)).user : undefined;
  },
});
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background: white;
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
