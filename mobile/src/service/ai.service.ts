import { api } from "./axios.service";

export async function getTip(topicId: number) {
  try {
    const response = await api.get(`/ai/tip/topic/${topicId}`);

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
