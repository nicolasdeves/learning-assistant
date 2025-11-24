import { TopicActivityInformationsResponse, TopicResponse } from "../interfaces/topic";
import { api } from "./axios.service";

export async function getTopicsByUser(googleUserId: string): Promise<TopicResponse[] | null> {
    try {
        const response = await api.get(`/topics/user/${googleUserId}`);
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

export async function getTopicsCreatedByUser(googleUserId: string): Promise<TopicResponse[] | null> {
    try {
        const response = await api.get(`/topics/createdByUser/${googleUserId}`);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}

export async function getUserTopicsActivitiesInformations(googleUserId: string): Promise<TopicActivityInformationsResponse[] | null> {
    try {
        const response = await api.get(`/topics/activitiesInformations/${googleUserId}`);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}

export async function addTopic(name: string, createdByGoogleUserId: string) {
    try {
        const body = {
            name,
            createdByGoogleUserId
        }
        
        const response = await api.post(`/topics/createdByUser`, body);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}