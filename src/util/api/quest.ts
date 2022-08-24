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

export interface AnswerQuestRequest {
  answer: string;
}

export interface AnswerQuestResponse {
  correct: boolean;
}

export const genreText: Record<string, string> = {
  MUL: "４択問題",
  COM: "組み合わせ問題",
};

export const getQuestSummaryList = () =>
  accessApi<{}, { quests: QuestSummary[] }>("quests");

export const getQuest = (quest: string) =>
  accessApi<{}, { quest: QuestDetail }>(`quests/${quest}`);

export const answerQuest = (quest: string, req: AnswerQuestRequest) =>
  accessApi<AnswerQuestRequest, AnswerQuestResponse>(
    `quests/${quest}/answer`,
    req,
    "POST"
  );
