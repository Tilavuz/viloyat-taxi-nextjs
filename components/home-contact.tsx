import { MessageCircle, User } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import image from "../public/image 2.svg"

export default function HomeContact() {
  return (
    <div className="flex justify-around items-center bg-[#f5f5f4] rounded-md py-12">
        <form className="flex gap-4 flex-col">
            <div>
                <h3 className="font-bold text-4xl text-[#44403c]">Biz bilan bog'lanish</h3>
            </div>
            <div className="flex flex-col gap-4">
                <Label>
                    <span className="flex items-center font-bold text-2xl">
                        <User size={24}/>
                        Ism:
                    </span>
                    <Input placeholder="Jonibek" className="bg-[#d6d3d1] py-5"/>
                </Label>
                <Label>
                    <span className="flex items-center font-bold text-2xl">
                        <User size={24}/>
                        Tel:
                    </span>
                    <Input placeholder="+998 90 882 7251" className="bg-[#d6d3d1] py-5"/>
                </Label>
                <div>
                    <span className="flex items-center font-bold text-2xl">
                        <MessageCircle />
                        Habar:
                    </span>
                    <Textarea className="bg-[#d6d3d1]" placeholder="Maqsadingizni shu yerga yozing"/>
                </div>
                <Button variant={'outline'} className="border font-bold">Yuborish</Button>
            </div>
        </form>
        <div>
            <Image 
                src={image}
                alt="image contact"
            />
        </div>
    </div>
  )
}
