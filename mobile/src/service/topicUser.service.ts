import { api } from './axios.service';

export async function linkUserToTopic(googleUserId: string, topicId: number) {
  try {
    const body: TopicUserRequest = {
      googleUserId,
      topicId,
    };
    const response = await api.post(`topicUsers`, body);

    console.log('response');
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
