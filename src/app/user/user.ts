export enum UserRole {
    ADMIN = 'ADMIN',
    ETUDIANT = 'ETUDIANT',
}

export class User {
    id!: number;
    nom!: String;
    prenom!: String;
    email!: String;
    password!: String;
    role!: UserRole;
    cin!: number;
    dateNaissance!: Date;
    ecole!: String;
}
