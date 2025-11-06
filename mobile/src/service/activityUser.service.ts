import { ActivityUserRespose } from '../interfaces/activityUser';
import { api } from './axios.service';

export async function registerUserActivity(
  activityId: number,
  googleUserId: string,
) {
  try {
    const body = {
      activityId,
      googleUserId,
    };
    const response = await api.post(`/activityUsers`, body);

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function getActivityUserByUser(googleUserId: string): Promise<ActivityUserRespose[] | null> {
  try {
    const response = await api.get(`/activityUsers/user/${googleUserId}`);

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
