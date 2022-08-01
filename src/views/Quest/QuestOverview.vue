<template>
  <div class="wrapper">
    <div v-for="(quest, idx) in quests" :key="idx" @click="onSelectQuest(quest)" class="quest-card">
      <div class="title-box">
        <h4 class="title">{{ quest.title }}</h4>
      </div>
      <div class="title-decoration" />

      <p class="genre">{{ quest.genre }}</p>

      <span class="point-badge">
        {{ quest.experience }}
      </span>
    </div>
  </div>

  <c-confirm-dialog v-model="dialog" :quest="selectedQuest" @cancel="closeDialog"
    @confirm="$router.push({ path: `/quests/` + selectedQuest.id })" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { getQuestSummaryList, QuestSummary } from "../../util/api/quest";

import CConfirmDialog from "../../components/QuestConfirmDialog.vue";

const component = defineComponent({
  components: {
    CConfirmDialog,
  },
  data: () => ({
    quests: [] as QuestSummary[],
    dialog: false,
    selectedQuest: {} as QuestSummary
  }),
  methods: {
    closeDialog() { this.dialog = false },
    onSelectQuest(quest: QuestSummary) {
      this.selectedQuest = quest
      this.dialog = true
    }
  },
  mounted() {
    getQuestSummaryList().then(data => { this.quests = data.quests }).catch(error => console.log(error))
  },
});

export const route: RouteRecordRaw = { path: "/quests", component }
export default component
</script>

<style scoped>
.wrapper {
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  gap: 40px
}

.quest-card {
  width: 377px;
  height: 115px;
  border: 1px solid #fc8c0d;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.quest-card .title-box {
  margin: 0;
  width: 377px;
  height: 47px;
  background: #fc8c0d 0% 0% no-repeat padding-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.quest-card .title {
  margin-top: 20px;
  text-align: center;
  font: normal normal bold 14px/17px Segoe UI;
  color: #ffffff;
}

.quest-card .title-decoration {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 21px 188.5px 0 188.5px;
  border-color: #fc8c0d transparent transparent transparent;
}

.quest-card .genre {
  margin-top: 1rem;
  text-align: center;
  font: normal normal bold 8px/10px Segoe UI;
  color: hsl(0, 0%, 44%);
}

.quest-card .point-badge {
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 44px;
  height: 43px;
  background: #71afe5 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: normal normal bold 16px/27px "Tsukushi A Round Gothic";
  letter-spacing: 0px;
  color: white;
}
</style>
