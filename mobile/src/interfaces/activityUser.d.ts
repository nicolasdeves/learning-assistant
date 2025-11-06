import { ActivityRespose } from "./activity";
import { TopicResponse } from "./topic";

export interface ActivityUserRespose {
    id: number,
    googleUserId: string,
    activityId: number,
    activity: ActivityRespose,
    createdAt: string
}