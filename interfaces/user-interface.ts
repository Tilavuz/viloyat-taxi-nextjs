export interface Passenger {
    _id?: string;
    first_name: string;
    last_name: string;
    role?: string;
    profile_picture?: string;
    phone_number: string;
    createdAt?: string;
    iat?: number;
    exp?: number;
}

export interface Driver extends Passenger {
    birthday: string;
    vehiclet_type: string;
    vehiclet_number: string;
}