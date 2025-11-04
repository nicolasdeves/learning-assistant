import { api } from "./axios.service";

export async function getCommunitiesUsers(googleUserId: string) {
  try {
    const response = await api.get(
      `communitiesUsers/getByUser/${googleUserId}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}