import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Loading from "../loading";
import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import useLoading from "@/hooks/use-loading";

export default function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { pending, handleLoading } = useLoading();

  return (
    <form className="bg-slate-100 pb-12 pt-8 px-8 rounded-xl">
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
      <div className="flex items-center gap-1">
        <Label className="flex flex-col gap-1 font-bold mb-6 flex-1">
          Parol
          <Input
            type="password"
            ref={passwordRef}
            placeholder="*******"
            className="bg-[#d6d3d1] py-5"
            required
          />
        </Label>
        <Label className="flex flex-col gap-1 font-bold mb-6 flex-1">
          Parolni takrorlang
          <Input
            type="password"
            ref={password2Ref}
            placeholder="*******"
            className="bg-[#d6d3d1] py-5"
            required
          />
        </Label>
      </div>
      <Button
        className="font-bold w-full flex items-center gap-2"
        type="submit"
      >
        Ro`yhatdan o`tish
        {pending ? <Loading styles={"w-max"} size={16} /> : ""}
      </Button>
    </form>
  );
}
