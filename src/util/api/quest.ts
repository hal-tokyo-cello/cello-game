import { accessApi } from ".";

export interface QuestSummary {
  id: string; // FIX: property name for quest id might change
  title: string;
  experience: number;
  genre: "MUL" | "COM";
  cleared: boolean;
}

export interface QuestDetail extends QuestSummary {
  options: string[];
}

export const genreText: Record<string, string> = {
  MUL: "４択問題",
  COM: "組み合わせ問題",
};

export const getQuestSummaryList = () =>
  accessApi<{}, { quests: QuestSummary[] }>("quests");

export const getQuest = (quest: string) =>
  accessApi<{}, { quest: QuestDetail }>(`quests/${quest}`);
