import { ActivityRespose } from "../interfaces/activity";
import { TopicActivityInformationsResponse, TopicResponse } from "../interfaces/topic";
import { TopicUserResponse } from "../interfaces/topicUser";
import { api } from "./axios.service";

export async function getActivitiesByUser(googleUserId: string): Promise<TopicResponse[] | null> {
    try {
        const response = await api.get(`/activities/user/${googleUserId}`);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}

export async function getActivityByTopicUser(topicUser: TopicUserResponse): Promise<ActivityRespose | null> {
    try {
        const response = await api.get(`/activities/generate/topicUser/${topicUser.id}`);

        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}


