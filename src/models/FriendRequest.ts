export interface FriendRequest {
    requestId?: number;
    senderId: number;
    receiverId: number;
    status: string;
    createdDateTime: string;
}