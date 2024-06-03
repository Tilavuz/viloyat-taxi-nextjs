import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Loading from "../loading";
import { FormEvent, useRef, useState } from "react";
import useLoading from "@/hooks/use-loading";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import axios, { AxiosError } from "axios";
const url = process.env.NEXT_PUBLIC_API_URL;
import { useCookies } from "react-cookie";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function LoginComponent() {
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { pending, handleLoading } = useLoading();
  const [role, setRole] = useState<string>("passenger");
  const [, setCookie] = useCookies(["token"]);
  const { toast } = useToast();

  const login = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const loginData = {
        phone_number: phoneRef?.current?.value,
        password: passwordRef?.current?.value,
      };
      const res = await axios.post(url + `/login/${role}`, loginData);
      const message = res.data.message;
      if (message) {
        toast({
          description: message,
        });
      }
      setCookie("token", res.data.token);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      const message = error?.response?.data?.message || "server error";
      if (message) {
        toast({
          description: message,
        });
      }
    }
  };

  return (
    <form
      className="bg-slate-100 pb-12 pt-8 px-8 rounded-xl"
      onSubmit={(e) => login(e)}
    >
      <div className="mb-4">
        <p className="font-bold text-3xl mb-4">Kirish</p>
        <RadioGroup
          defaultValue="passenger"
          onValueChange={(role) => setRole(role)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="driver" id="driver" />
            <Label htmlFor="driver">Haydovchi</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="passenger" id="passenger" />
            <Label htmlFor="passenger">Yo`lovchi</Label>
          </div>
        </RadioGroup>
      </div>
      <Label className="flex flex-col gap-1 font-bold mb-6">
        Telefon raqam
        <Input
          ref={phoneRef}
          placeholder="+998908827251"
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
      <Button
        className="font-bold w-full flex items-center gap-2"
        type="submit"
      >
        Kirish
        {pending ? <Loading styles={"w-max"} size={16} /> : ""}
      </Button>
      <Toaster />
    </form>
  );
}
