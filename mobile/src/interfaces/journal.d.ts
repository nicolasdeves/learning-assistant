import { LevelResponse } from "./level";
import { TopicResponse } from "./topic";

export interface JournalResponse {
  id: number;
  topicId: number;
  levelId: number;
  content: string;
  createdAt: string;

  level: LevelResponse;
  topic: TopicResponse;
}
