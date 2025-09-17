import { api } from "./axios.service";

export async function linkUserToTopic(googleUserId: string, topicId: number) {
    const body: TopicUserRequest = {
        googleUserId,
        topicId
    }
    const response = await api.post(`/topicUsers`, body);
    
    return response.data;
}