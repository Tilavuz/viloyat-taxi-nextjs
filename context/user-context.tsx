"use client"
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const key = process.env.NEXT_PUBLIC_JWT_KEY || "";

interface Passenger {
    _id: string;
    first_name: string;
    last_name: string;
    role: string;
    profile_picture: string;
    phone_number: string;
    createdAt: string;
    iat: number;
    exp: number;
}

interface Driver extends Passenger {
    birthday: string;
    vehiclet_type: string;
    vehiclet_number: string;
}

export const UserContext = createContext<Driver | Passenger | null>(null);

export default function UserContextProvider({ children }: { children: ReactNode }) {
    const [cookies] = useCookies(['token']);
    const [user, setUser] = useState<Driver | Passenger | null>(null);

    useEffect(() => {
        if (key && cookies.token) {
            const decoded = jwtDecode(cookies.token) as Driver | Passenger;
            setUser(decoded);
        }
    }, [cookies.token]);

    const userMemo = useMemo(() => user, [user])

    return (
        <UserContext.Provider value={userMemo}>
            {children}
        </UserContext.Provider>
    );
}
