export interface TopicUserRequest {
    googleUserId: string,
    topicId: number,
    levelId: number
}

export interface TopicUserUncheckedLevelRequest {
    googleUserId: string,
    topicId: number,
}