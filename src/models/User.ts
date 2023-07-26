export interface User {
    id?: number;
    accountId?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    createdDateTime: string;
    status: string;
    role: string;
}