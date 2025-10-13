export interface DailyResponse {
    id: number,
    content: string,
    topicId: number,
    lelveId: number
}

export interface DailyRequest {
    content: string,
    topicId: number,
    lelveId: number
}