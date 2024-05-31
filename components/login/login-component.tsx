import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Loading from "../loading";
import { FormEvent, useContext, useRef } from "react";
import useLoading from "@/hooks/use-loading";
import { AuthContext } from "@/context/auth-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase-config";
import LoginGithubBtn from "./login-github-btn";
import LoginGoogleBtn from "./login-google-btn";
import { useRouter } from "next/navigation";

export default function LoginComponent() {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const { pending, handleLoading } = useLoading()
    const router = useRouter()  
  // Use context
  const context = useContext(AuthContext)

    const loginEmail = async (e: FormEvent) => {
        e.preventDefault()
        const email = emailRef?.current?.value || undefined;
        const password = passwordRef?.current?.value;
    
        if (!email || !password) {
          console.log("Email and password are required.");
          return;
        }
    
        try {
          handleLoading(true)
          const res = await signInWithEmailAndPassword(auth, email, password)
          context?.handleUser(res.user)
          router.push('/')
        }catch(err) {
          console.log(err);
        }finally {
          handleLoading(false)
        }
    
      }

  return (
    <form
      className="bg-slate-100 pb-12 pt-8 px-8 rounded-xl"
      onSubmit={(e) => loginEmail(e)}
    >
      <p className="font-bold text-3xl mb-4">Kirish</p>
      <Label className="flex flex-col gap-1 font-bold mb-6">
        Email
        <Input
          type="email"
          ref={emailRef}
          placeholder="example@gmail.com"
          className="bg-[#d6d3d1] py-5"
          required
        />
      </Label>
      <Label className="flex flex-col gap-1 font-bold mb-6">
        Parol
        <Input
          type="password"
          ref={passwordRef}
          placeholder="*******"
          className="bg-[#d6d3d1] py-5"
          required
        />
      </Label>
      <div className="flex items-center gap-4 mb-4">
        <LoginGithubBtn />
        <LoginGoogleBtn />
      </div>
      <Button
        className="font-bold w-full flex items-center gap-2"
        type="submit"
      >
        Kirish
        {pending ? <Loading styles={"w-max"} size={16} /> : ""}
      </Button>
    </form>
  );
}
