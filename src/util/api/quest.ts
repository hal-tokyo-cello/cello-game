import { accessApi } from ".";

export interface QuestSummary {
  id: string; // FIX: property name for quest id might change
  title: string;
  experience: number;
  genre: string;
  cleared: boolean;
}

export const getQuestSummaryList = () =>
  accessApi<{}, { quests: QuestSummary[] }>("quests");
