import { api } from './axios.service';

export async function addUserJournalNote(
  content: string,
  topicId: number,
  levelId: number | null,
  googleUserId: string,
) {
  try {
    const body = {
      content,
      topicId,
      levelId,
      googleUserId,
    };

    const response = await api.post(`/journal`, body);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function getUserJournalNotes(
  googleUserId: string,
  topicId: number,
) {
  try {
    const response = await api.get(
      `/journal/user/${googleUserId}/topic/${topicId}`,
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
