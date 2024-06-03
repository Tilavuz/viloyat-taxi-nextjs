import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Loading from "../loading";
import { FormEvent, useRef, useState } from "react";
import useLoading from "@/hooks/use-loading";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
const url = process.env.NEXT_PUBLIC_API_URL;
import axios, { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Register() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const vehicletTypeRef = useRef<HTMLInputElement>(null);
  const vehicletNumberRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);
  const [role, setRole] = useState<string>("passenger");
  const { pending, handleLoading } = useLoading();
  const [, setCookie] = useCookies(["token"]);
  const { toast } = useToast();

  const vehicletNumberPattern = /^[0-9]{2} ?[A-Z]? ?[0-9]{3} ?[A-Z]{2,3}$/;

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {

      if (role === "driver") {
        if (!vehicletNumberPattern.test(vehicletNumberRef?.current?.value!)) {
          toast({
            description: "Mashina raqamini to'g'ri shaklda kiriting!",
          });
          return;
        }

        if (passwordRef?.current?.value !== password2Ref?.current?.value) {
          toast({
            description: "Parol bir xil emas!"
          })
          return
        }
        const registerData = {
          first_name: firstNameRef?.current?.value,
          last_name: lastNameRef?.current?.value,
          birthday: birthdayRef?.current?.value,
          vehiclet_type: vehicletTypeRef?.current?.value,
          vehiclet_number: vehicletNumberRef?.current?.value,
          phone_number: phoneNumberRef?.current?.value,
          password: passwordRef?.current?.value,
        };
        const res = await axios.post(url + "/driver", registerData);
        const message = res.data.message;
        if (message) {
          toast({
            description: message,
          });
        }
        setCookie("token", res.data.token);
        return;
      }
      if (role === "passenger") {
        if (passwordRef?.current?.value === password2Ref?.current?.value) {
          const registerData = {
            first_name: firstNameRef?.current?.value,
            last_name: lastNameRef?.current?.value,
            phone_number: phoneNumberRef?.current?.value,
            password: passwordRef?.current?.value,
          };
          const res = await axios.post(url + "/passenger", registerData);
          const message = res.data.message;
          if (message) {
            toast({
              description: message,
            });
          }
          setCookie("token", res.data.token);
          return;
        }
      }
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
      onSubmit={(e) => registerUser(e)}
    >
      <div className="mb-4">
        <p className="font-bold text-3xl mb-4">Ro`yhatdan o`tish</p>
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
        Ism
        <Input
          type="text"
          ref={firstNameRef}
          placeholder="Sardor"
          className="bg-[#d6d3d1] py-5"
          required
        />
      </Label>
      <Label className="flex flex-col gap-1 font-bold mb-6">
        Familya
        <Input
          type="text"
          ref={lastNameRef}
          placeholder="Tursunov"
          className="bg-[#d6d3d1] py-5"
          required
        />
      </Label>
      {role === "driver" && (
        <>
          <Label className="flex flex-col gap-1 font-bold mb-6">
            Tug`ulgan kun
            <Input
              type="date"
              ref={birthdayRef}
              placeholder="01.01.2001"
              className="bg-[#d6d3d1] py-5"
              required
            />
          </Label>
          <Label className="flex flex-col gap-1 font-bold mb-6">
            Avtomobil turi
            <Input
              type="text"
              ref={vehicletTypeRef}
              placeholder="Nexi 2"
              className="bg-[#d6d3d1] py-5"
              required
            />
          </Label>
          <Label className="flex flex-col gap-1 font-bold mb-6">
            Avtomobil raqami
            <Input
              type="text"
              ref={vehicletNumberRef}
              placeholder="70A070AA"
              className="bg-[#d6d3d1] py-5"
              required
            />
          </Label>
        </>
      )}
      <Label className="flex flex-col gap-1 font-bold mb-6">
        Telefon raqam
        <Input
          type="text"
          ref={phoneNumberRef}
          placeholder="+998901234567"
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
      <Toaster />
    </form>
  );
}
