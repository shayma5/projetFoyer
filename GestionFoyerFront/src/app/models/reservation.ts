import { User } from "../user/user";

export class Reservation {
    idReservation!: string;
    anneUniversitere!: Date;
    estValide!: boolean;
    users?: User[];
}
