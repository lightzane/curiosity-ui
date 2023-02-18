import { User } from "./user.model";

export class Curiosity {
    _id?: string;
    question!: string;
    answer!: string;
    /** The `_id` of the creator or `User` */
    createdBy!: string;
    createdTs!: Date | string;
    /** List of users that gave a favorite on this curiosity */
    favorites!: User[];
    /** Total count that the answer has been viewed */
    views!: number;
}
