"use client"
import { createContext, ReactNode, useEffect, useMemo, useState } from "react"
import axios from "axios";
import { useCookies } from "react-cookie";
import { DriverPost, PassengerPost } from "@/interfaces/user-post-interface";
import { jwtDecode } from "jwt-decode";
import { Driver, Passenger } from "@/interfaces/user-interface";
const url = process.env.NEXT_PUBLIC_API_URL
const key = process.env.NEXT_PUBLIC_JWT_KEY || "";


export const UserPostsContext = createContext<DriverPost[] | PassengerPost[] | null>(null)



export default function UserPostsContextProvider({ children }: { children: ReactNode }) {

  const [posts, setPosts] = useState(null)
  const [cookies] = useCookies(['token'])

  const postsMemo = useMemo(() => posts, [posts])
  const [user, setUser] = useState<Driver | Passenger | null>(null);

    useEffect(() => {
        if (key && cookies.token) {
            const decoded = jwtDecode(cookies.token) as Driver | Passenger;
            setUser(decoded);
        }
    }, [cookies.token]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(url + `/${user?.role}/posts`, {
        headers: {
          'x-auth-token': cookies.token
        }
      })
      setPosts(res.data);
    }
    if(cookies.token && user?.role) {
      getPosts()
    }

  }, [cookies.token, user?.role])

  return (
    <UserPostsContext.Provider value={postsMemo}>
        {children}
    </UserPostsContext.Provider>
  )
}
