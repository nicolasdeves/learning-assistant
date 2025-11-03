import { MessageResponse } from "../interfaces/message";
import { api } from "./axios.service";

export async function getMessagesByCommunity(communityId: number): Promise<MessageResponse[] | null> {
    try {
        const response = await api.get(`/messages/getByCommunity/${communityId}`);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}

export async function sendMessage(communityUserId: number, content: string): Promise<MessageResponse[] | null> {
    try {
        const body = {
            communityUserId,
            content
        }
        
        const response = await api.post(`/messages`, body);
        return response.data;
    } catch (error: any) {
        console.log(error)
        return null
    }
}