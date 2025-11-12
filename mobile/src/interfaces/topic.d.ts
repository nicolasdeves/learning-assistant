import { LevelResponse } from "./level"
import { TopicUserResponse } from "./topicUser"

export interface TopicResponse {
    id: number,
    name: string
    levels?: LevelResponse[]

    topicUser: TopicUserResponse[]
}

export interface TopicActivityInformationsResponse {
    id: number,
    name: string
    levels?: LevelResponse[]
}