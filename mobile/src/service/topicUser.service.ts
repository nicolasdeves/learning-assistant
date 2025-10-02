import { api } from './axios.service';

export async function linkUserToTopic(googleUserId: string, topicId: number, level: string) {
  try {
    const body: TopicUserRequest = {
      googleUserId,
      topicId,
      level
    };
    const response = await api.post(`topicUsers`, body);

    return response.data;
  } catch (error) {
    console.log(error)
  }
}
