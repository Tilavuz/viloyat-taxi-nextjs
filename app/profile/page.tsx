"use client";
import DriverPost from "@/app/components/posts/driver-post";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { UserContext } from "@/context/user-context";
import { ImagePlus, Menu } from "lucide-react";
import { useContext } from "react";
import image1 from "@/public/image12321.jpg";
import Image from "next/image";
import DriverPostsData from "@/app/components/posts/driver-posts-data";

export default function Profile() {
  const user = useContext(UserContext);
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p className="font-bold text-4xl">Elonlaringiz</p>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Profilingiz</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor sit amet consectetur.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col">
                <div className="">
                  <div className="h-[100px] w-full relative">
                    <input type="file" className="absolute z-10 h-full opacity-0 cursor-pointer w-[100px]" />
                    {user?.profile_picture ? (
                      <Image
                        src={user?.profile_picture}
                        alt="profile image"
                        width={100}
                        height={100}
                        className="absolute cursor-pointer"
                      />
                    ) : (
                      <Image
                        src={image1}
                        alt={"profile image"}
                        width={100}
                        height={100}
                        className="absolute cursor-pointer"
                      />
                    )}
                    <Button className="absolute right-10 top-[50%] translate-y-[-50%]">
                      <ImagePlus size={18} className="mr-2"/>
                      O`zgartirish
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <Input value={user?.first_name} />
                  <Input value={user?.last_name} />
                  <Input value={user?.phone_number} disabled />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold">E`lon joylash</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>E`lon joylash</DialogTitle>
              </DialogHeader>
              <DriverPost />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <DriverPostsData />
    </div>
  );
}
