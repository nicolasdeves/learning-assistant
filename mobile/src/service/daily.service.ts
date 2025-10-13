import { DailyRequest } from "../interfaces/daily";
import { api } from "./axios.service";

export async function addDailyRegister(content: string, topicId: number, levelId: number) {
    try {
        const body = {
            content,
            topicId,
            levelId
        }
        
        const response = await api.post(`/diaries`, body);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}