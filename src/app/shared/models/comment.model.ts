import { User } from "./user.model";

export class Comment {
    id: number;
    text: string;
    acceptance: number;
    user: User;
}