import { CommunityUserResponse } from "../interfaces/communityUser";
import { api } from "./axios.service";

export async function getCommunitiesUsers(googleUserId: string) {
  try {
    const response = await api.get(
      `communitiesUsers/getByUser/${googleUserId}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to ensure the function always returns a value
  }
}

export async function getCommunityUser(googleUserId: string, communityId: number): Promise<CommunityUserResponse | undefined> {
  try {
    const response = await api.get(
      `communitiesUsers/getCommunityUserBy/user/${googleUserId}/community/${communityId}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}