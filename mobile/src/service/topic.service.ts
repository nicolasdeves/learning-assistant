import { TopicResponse } from "../interfaces/topics";
import { api } from "./axios.service";

export async function getTopicsByUser(userId: string): Promise<TopicResponse[] | null> {
    try {
        const response = await api.get(`/topics/user/${userId}`);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}

export async function getTopics(): Promise<TopicResponse[] | null> {
    try {
        const response = await api.get(`/topics`);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}