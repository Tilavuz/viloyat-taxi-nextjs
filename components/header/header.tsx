"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { items } from "./items";
import { CircleUser, UserCircle } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import Image from "next/image";
import image1 from "@/public/image12321.jpg"

export default function Header() {
  
  const context = useContext(AuthContext)

  return (
    <header className="border-b p-4 bg-[#4338ca] fixed top-0 left-0 w-full h-[75px]">
      <div className="flex items-center justify-between container h-full">
        <div>
          <h2 className="font-bold text-2xl cursor-pointer text-white">
            <Link href={"/"}>
              Viloyat<span className="text-[#facc15]">Taxi</span>
            </Link>
          </h2>
        </div>
        <nav className="flex items-center gap-2">
          <ul className="text-white flex items-center gap-4 font-bold">
            {items.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    className="hover:underline underline-offset-4 flex items-center gap-1"
                    href={item.location}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {
            context?.user ? (
              <Link href={'/profile'} className="flex items-center gap-1 text-white">
                {
                  context?.user.photoURL ? (
                    <Image 
                      src={context?.user.photoURL}
                      alt="profile image"
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                  ) : (
                    <Image 
                      src={image1}
                      alt={"profile image"}
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                  )
                }
              </Link>
            ) : (
              <Button variant={"ghost"} asChild className="border-2 font-bold bg-white hover:bg-inherit hover:text-white transition">
                <Link href={'/login'} className="flex items-center gap-1">
                  <CircleUser size={20}/>
                    Kirish
                </Link>
              </Button>
            )
          }
        </nav>
      </div>
    </header>
  );
}
