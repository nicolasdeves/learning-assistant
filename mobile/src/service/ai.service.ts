import { api } from "./axios.service";

export async function getTip(googleUserId: string) {
  try {
    const response = await api.get(`/ai/tip/user/${googleUserId}`);

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
