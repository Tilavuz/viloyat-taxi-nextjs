"use client"

import { User, onAuthStateChanged } from "firebase/auth"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/app/firebase-config"

export interface AuthContextProps {
    user: User | null;
    handleUser: (user: User) => void
}


export const AuthContext = createContext<AuthContextProps | null>(null)


export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const handleUser = (user: User | null) => {
      setUser(user);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubscribe()
    }, [])

  return <AuthContext.Provider value={{user, handleUser}}>
    {children}
  </AuthContext.Provider>
}
