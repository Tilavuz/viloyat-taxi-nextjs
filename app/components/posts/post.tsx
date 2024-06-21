"use client";
import Image from "next/image";
import image from "@/public/svg direction.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

export default function Post({
  _id,
  createdAt,
  price,
  role,
  number_of_passengers,
  passengers_id,
  drivers_id,
  travel_date,
  additional_info,
  start_city,
  destination_city,
}: {
  _id: string;
  createdAt: string;
  price: number;
  role: string | undefined;
  number_of_passengers: number;
  passengers_id?: string[];
  drivers_id?: string[];
  travel_date: string;
  additional_info: string;
  start_city: string;
  destination_city: string;
}) {
  const handleDate = (date: string) => {
    const dateMassiv = date.split("T");
    const day = dateMassiv[0].split("-").reverse().join("-");
    const time = dateMassiv[1].slice(0, 5);
    return day + " / " + time;
  };
  const router = usePathname();
  const user = useContext(UserContext);
  return (
    <div className="max-w-[300px] w-full shadow-inner border p-4 rounded-md flex flex-col gap-4">
      <p>{handleDate(createdAt)}</p>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Yo`lkira:</p>
          <p className="text-sm font-mono">{price} so`m</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Yo`lovchi:</p>
          {role === "driver" && (
            <Link href={`/profile/${_id}`} className="text-sm font-mono">
              {`${number_of_passengers} / ${passengers_id?.length}`}
            </Link>
          )}
          {role === "passenger" && (
            <p className="text-sm font-mono">{number_of_passengers}</p>
          )}
        </div>
        {role === "passenger" && (
          <div className="flex justify-between items-center">
            <p className="font-bold">Haydovchilar:</p>
            <Link href={`/profile/${_id}`} className="text-sm font-mono">
              {drivers_id?.length}
            </Link>
          </div>
        )}
        <div className="flex justify-between items-center">
          <p className="font-bold">Ketish vaqti:</p>
          <p className="text-sm font-mono">{travel_date}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Izoh:</p>
          <p className="text-sm font-mono">{additional_info}</p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Qayirdan</p>
              <p className="text-sm font-mono">{start_city}</p>
            </div>
            <div>
              <p className="font-bold">Qayirga</p>
              <p className="text-sm font-mono">{destination_city}</p>
            </div>
          </div>
          <div>
            <Image src={image} alt="image" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        {router !== "/passengers" && router !== '/drivers' && (
          <>
            <Button variant={"secondary"} className="font-bold">
              Tahrirlash
            </Button>
            <Button variant={"destructive"} className="font-bold">
              O`chirish
            </Button>
          </>
        )}
        {user?.role === "driver" && router === "/passengers" && (
          <>
            <Button variant={"secondary"} className="font-bold">
              Olib ketish
            </Button>
          </>
        )}
        {
          user?.role === 'passenger' && router === '/drivers' && (
            <>
              <Button className="">Birga ketish</Button>
            </>
          )
        }
      </div>
    </div>
  );
}
