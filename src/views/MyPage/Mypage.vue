<template>
  <h1>マイページ</h1>

  <div style="display: flex; justify-content: space-between">
    <div style="flex: 1 1">
      <p-avatar image="/src/assets/img/kimawari.png" size="xlarge" shape="circle" />
    </div>

    <div style="flex: 3 3">
      <div class="change">
        <p>{{ username }}</p>
        <p-button label="変更する" />
      </div>
      <div class="change">
        <p>E-mail: {{ mail }}</p>
        <p-button label="変更する" />
      </div>
      <div class="change">
        <p>password</p>
        <p-button label="変更する" />
      </div>
    </div>
  </div>

  <div style="float: right; margin-top: 40px; padding-right: 5px">
    <Button label="▶退会する" class="p-button-outlined" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import PAvatar from "primevue/avatar";
import PButton from "primevue/button";

export default defineComponent({
  data() {
    return {
      username: "セパ拓郎",
      mail: "sepatakuro@gmail.com",
    };
  },
  methods: {},
  components: {
    PAvatar,
    PButton,
  },
});
</script>

<style>
.change {
  display: flex;
  justify-content: space-between;
}

.change button {
  margin: 5px;
}
</style>