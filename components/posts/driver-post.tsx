import { useContext, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useLoading from "@/hooks/use-loading";
import Loading from "../loading";

export default function DriverPost() {
  const { pending, handleLoading } = useLoading();
  const vehicletTypeRef = useRef<HTMLInputElement>(null);
  const vehicletNumberRef = useRef<HTMLInputElement>(null);
  const serviceDescriptionRef = useRef<HTMLInputElement>(null);
  const startCityRef = useRef<HTMLInputElement>(null);
  const destinationCityRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col gap-3">
      <Label className="flex flex-col gap-1 font-bold">
        Avtomobil rusumi
        <Input ref={vehicletTypeRef} placeholder="Nexi 2" required />
      </Label>
      <Label className="flex flex-col gap-1 font-bold">
        Avtomobil raqami
        <Input
          className="uppercase"
          ref={vehicletNumberRef}
          placeholder="70A070AA"
          required
        />
      </Label>
      <Label className="flex flex-col gap-1 font-bold">
        Xizmatingizni tariflang
        <Input
          ref={serviceDescriptionRef}
          placeholder="Yo'lda gazga to'xtash yo'q"
          required
        />
      </Label>
      <Label className="flex flex-col gap-1 font-bold">
        Yo`lkra narxi (so`m)
        <Input ref={priceRef} placeholder="100000" required />
      </Label>
      <Label className="flex flex-col gap-1 font-bold">
        Qayirdan
        <Input
          ref={startCityRef}
          placeholder="Qarshi Termiz styanka"
          required
        />
      </Label>
      <Label className="flex flex-col gap-1 font-bold">
        Qayirga
        <Input ref={destinationCityRef} placeholder="Termiz shahar" required />
      </Label>
      <Button>{pending ? <Loading styles="" size={16} /> : "Joylash"}</Button>
    </form>
  );
}
