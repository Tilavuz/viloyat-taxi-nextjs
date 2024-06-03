"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import LoginComponent from "@/app/components/login/login-component";
import Register from "@/app/components/login/register";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";


export default function Login() {
  const navigation = useRouter();
  const [cookies] = useCookies(["token"]);
  useEffect(() => {
    if (cookies.token) {
      navigation.push("/");
    }
  }, [cookies.token, navigation]);

  return (
    <div className="pt-24">
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
  );
}
