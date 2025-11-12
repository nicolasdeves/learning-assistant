import { TopicUserRequest, TopicUserUncheckedLevelRequest } from '../interfaces/topicUser';
import { api } from './axios.service';

export async function linkUserToTopic(googleUserId: string, topicId: number, levelId: number, weeklyGoal: number) {
  try {
    const body: TopicUserRequest = {
      googleUserId,
      topicId,
      levelId,
      weeklyGoal
    };
    const response = await api.post(`topicUsers`, body);

    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export async function verifyUserIsAlreadyRegistered(googleUserId: string, topicId: number) {
  try {
    const body: TopicUserUncheckedLevelRequest = {
      googleUserId,
      topicId,
    };

    const response = await api.get(`topicUsers/verify/${googleUserId}/${topicId}`);

    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export async function getTopicUserByUser(googleUserId: string) {
  try {
    const response = await api.get(`topicUsers/${googleUserId}`);

    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export async function updateTopicUser(googleUserId: string, topicId: number, levelId: number, weeklyGoal: number) {
  try {
    const body: TopicUserRequest = {
      googleUserId,
      topicId,
      levelId,
      weeklyGoal
    };

    console.log('updateTopicUser')
    const response = await api.put(`topicUsers`, body);

    return response.data;
  } catch (error) {
    console.log(error)
  }
}