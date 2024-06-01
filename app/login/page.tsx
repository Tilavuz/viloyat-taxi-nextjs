"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginComponent from "@/components/login/login-component";
import Register from "@/components/login/register";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const navigation = useRouter()
  return (
    <div className='pt-24'>
        <Tabs defaultValue="sign-in" className="max-w-[600px] mx-auto">
          <TabsList>
            <TabsTrigger value="sign-in">Kirish</TabsTrigger>
            <TabsTrigger value="sign-up">Ro`yhatdan o`tish</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <LoginComponent />
          </TabsContent>
          <TabsContent value="sign-up">
            <Register />
          </TabsContent>
        </Tabs>
    </div>
  )
}
