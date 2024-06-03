"use client"
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { Driver, Passenger } from "@/interfaces/user-interface";

const key = process.env.NEXT_PUBLIC_JWT_KEY || "";

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
