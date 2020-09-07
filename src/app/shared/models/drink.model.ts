export class Drink {
    id: number;
    name: string;
    type: string;
    is_alcoholic: boolean;
    is_prepared: boolean;
    acceptance: number;
    comments: Comment[];
}