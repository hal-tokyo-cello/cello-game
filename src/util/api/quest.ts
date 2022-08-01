import { accessApi } from ".";

interface QuestSummaryList {
  quests: {
    title: string;
    experience: number;
    genre: string;
    cleared: boolean;
  }[];
}

export const getQuestSummaryList = () =>
  accessApi<{}, QuestSummaryList>("quests");
