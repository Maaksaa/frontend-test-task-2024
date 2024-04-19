export interface Specialization {
    id: number;
    name: string;
}

export interface Doctor {
    id: number;
    firstName: string;
    lastName: string;
    specializationList: Array<{ id: number }>;
}