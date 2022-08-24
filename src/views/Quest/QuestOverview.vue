<template>
  <div class="wrapper">
    <div
      v-for="(quest, idx) in quests"
      :key="idx"
      @click="selectedQuest = quest"
      class="quest-card"
    >
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

  <p-dialog
    modal
    dismissable-mask
    close-on-escape
    :draggable="false"
    :visible="!!selectedQuest"
    style="min-width: 620px; text-align: center"
  >
    <template #header>
      <p class="title">{{ selectedQuest?.title }}</p>
    </template>

    <div>
      <p class="genre">{{ selectedQuest?.genre }}</p>
      <p class="experience">{{ selectedQuest?.experience }}</p>
    </div>

    <template #footer>
      <div class="actions" style="text-align: center">
        <p-button label="キャンセル" @click="selectedQuest = undefined" />
        <p-button
          label="解答へ"
          autofocus
          @click="
            !!selectedQuest &&
              $router.push({ path: `/quests/` + selectedQuest.id })
          "
        />
      </div>
    </template>
  </p-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

import { getQuestSummaryList, QuestSummary } from "../../util/api/quest";

import PButton from "primevue/button";
import PDialog from "primevue/dialog";

const component = defineComponent({
  components: {
    PButton,
    PDialog,
  },
  data: () => ({
    quests: [] as QuestSummary[],
    selectedQuest: undefined as QuestSummary | undefined,
  }),
  mounted() {
    getQuestSummaryList().then((data) => {
      this.quests = data.quests;
    });
  },
});

export const route: RouteRecordRaw = { path: "/quests", component };
export default component;
</script>

<style scoped>
.wrapper {
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  gap: 40px;
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

.title,
.genre,
.experience {
  font-weight: bold;
}

.title {
  flex: 1 1;
  font-size: 21px;
  line-height: 25px;
  color: #ff8c00;
}

.genre {
  font-size: 12px;
  line-height: 14px;
  color: #666666;
}

.genre::before {
  content: "ジャンル：";
}

.experience {
  margin: 0;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #666666;
}

.experience::before {
  content: "🅿︎";
}

.actions button {
  width: 150px;
  height: 52px;
  margin: 0;
  cursor: pointer;
  margin-right: 40px;
}

.actions button:last-of-type {
  margin-right: 0;
}
</style>
