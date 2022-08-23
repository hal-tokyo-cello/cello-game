<template>
  <c-form-layout title="プロフィール">
    <div
      @click="selecting = true"
      style="margin: auto; width: 150px; height: 150px"
    >
      <p-avatar
        v-if="race"
        :image="race.image"
        size="xlarge"
        shape="circle"
        class="mr-2 race-image"
        style="width: 100%; height: 100%"
      />
      <svg v-else viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#707070" stroke="none" />
        <rect x="10" y="19" width="20" height="2" fill="white" />
        <rect x="19" y="10" width="2" height="20" fill="white" />
      </svg>
    </div>

    <template #fields>
      <span class="p-float-label">
        <p-input-text
          v-model="name"
          id="player"
          type="text"
          autocomplete="username"
        />
        <label for="player">名前</label>
      </span>
    </template>

    <template #action>
      <p-button label="登録" type="submit" class="p-button-lg" />
    </template>
  </c-form-layout>

  <p-dialog
    modal
    dismissableMask
    v-model:visible="selecting"
    style="min-width: 620px; text-align: center"
  >
    <template #header>
      <h2 style="color: #707070; flex: 1 1">育てたい子を選んでね</h2>
    </template>

    <div class="races-wrapper">
      <div v-for="opt in options" @click="selectRace(opt)" class="race">
        <p-avatar
          :image="opt.image"
          shape="circle"
          size="xlarge"
          class="mr-2 race-image"
        />
        <span class="race-text">{{ opt.display }}</span>
      </div>
    </div>
  </p-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { getAvatarRaceOptions, RaceOption } from "../../util/api";

import PAvatar from "primevue/avatar";
import PButton from "primevue/button";
import PDialog from "primevue/dialog";
import PInputText from "primevue/inputtext";

import CFormLayout from "../../layout/Form.vue";

import avatarImage from "../../assets/images/pancake1.png";

const component = defineComponent({
  components: {
    CFormLayout,
    PAvatar,
    PButton,
    PDialog,
    PInputText,
  },
  data: () => ({
    avatarImage,
    name: "",
    race: undefined as RaceOption | undefined,
    options: [] as RaceOption[],
    selecting: false,
  }),
  methods: {
    selectRace(option: RaceOption) {
      this.race = option;
      this.selecting = false;
    },
  },
  mounted() {
    getAvatarRaceOptions().then((data) => {
      this.options = data.options;
    });
  },
});

export const route: RouteRecordRaw = {
  path: "/auth/signup/profile",
  component,
};
export default component;
</script>

<style scoped>
.races-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.race {
  display: flex;
  flex-direction: column;
}

.race-image {
  border: 1px solid #707070;
  width: 150px;
  height: 150px;
  padding: 10px;
}

.race-text {
  display: block;
  margin: 10px 0;
}
</style>
