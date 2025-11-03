import { api } from "./axios.service";

export async function getUserCommunities(googleUserId: string) {
  try {
    const response = await api.get(
      `communities/getByUser/${googleUserId}`,
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
