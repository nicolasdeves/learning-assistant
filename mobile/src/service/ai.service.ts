import { api } from "./axios.service";

export async function getTip(topicId: number) {
  try {
    console.log('entrou getTip')
    const response = await api.get(`/ai/tip/topic/${topicId}`);

    console.log(response.data)

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
