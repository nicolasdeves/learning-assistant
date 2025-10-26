import { LevelResponse } from "./level"
import { TopicResponse } from "./topic"

export interface TopicUserRequest {
    googleUserId: string,
    topicId: number,
    levelId: number,
    weeklyGoal: number
}

export interface TopicUserUncheckedLevelRequest {
    googleUserId: string,
    topicId: number,
}

export interface TopicUserResponse {
    id: number,
    googleUserId: string,
    topicId: number,
    levelId: number,
    weeklyGoal: number,
    topic?: TopicResponse
    level?: LevelResponse
}