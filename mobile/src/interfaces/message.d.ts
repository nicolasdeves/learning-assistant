export interface MessageResponse {
    id: number,
    content: string,
    communityUserId: number
    communityUser: CommunityUserResponse
}