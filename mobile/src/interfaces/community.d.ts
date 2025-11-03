import { TopicResponse } from "./topic";

export interface CommunityResponse {
    id: number,
    name: string,
    topicId: number,
    topic: TopicResponse,
    created_at: string
}