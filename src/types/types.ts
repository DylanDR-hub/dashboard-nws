export type Student = {
    firstName: string;
    lastName: string;
    age: number;
    gender: "Homme" | "Femme";
    class: "A1" | "A2" | "A3" | "M1" | "M2";
    speciality: string;
    diploma: "Bachelor" | "Mastère";
    registrationDate: string;
    endDate: string | null;
    graduated: boolean;
    active: boolean;
    address: string;
    zipCode: string;
    city: string;
}