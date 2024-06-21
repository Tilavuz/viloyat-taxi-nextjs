import Image from "next/image";
import image1 from "@/public/image12321.jpg";
import { Button } from "./ui/button";

export default function User({
  firstName,
  lastName,
  phoneNumber,
  role,
  profilePicture,
}: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: "passenger" | "driver";
  profilePicture: string;
}) {
  return (
    <div className="max-w-[400px] justify-between flex items-start gap-6 p-4 bg-slate-50 rounded-md border">
      <div>
        {profilePicture ? (
          <Image
            className="rounded-md"
            src={profilePicture}
            alt="profile image"
            width={100}
            height={100}
          />
        ) : (
          <Image
            className="rounded-md"
            src={image1}
            alt={"profile image"}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex flex-col h-full">
        <div>
          <h2 className="font-bold">{firstName} {lastName}</h2>
          <p>{phoneNumber}</p>
        </div>
        <div className="mt-2">
          <Button className="mr-2" variant={'destructive'}>Rad etish</Button>
          <Button>Yozish</Button>
        </div>
      </div>
    </div>
  );
}
