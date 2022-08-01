import { accessApi } from ".";

export interface QuestSummary {
  title: string;
  experience: number;
  genre: string;
  cleared: boolean;
}

export const getQuestSummaryList = () =>
  accessApi<{}, { quests: QuestSummary[] }>("quests");
