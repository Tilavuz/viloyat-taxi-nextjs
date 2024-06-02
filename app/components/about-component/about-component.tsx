import Image from "next/image";
import image1 from "@/public/car-image.svg"
import Link from "next/link";
import { Facebook, Instagram, Send } from "lucide-react";
import { items } from "./items";

export default function AboutComponent() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-[#32428e] to-[#194acb] py-10 rounded-2xl px-16">
        <div>
            <Image
                src={image1}
                alt="car image"
                width={500}
                height={500}
            />
        </div>
        <div className="text-white max-w-[600px] text-center">
            <h3 className="text-4xl mb-8">Bizning maqsadimiz sizga qulaylik yaratib berish. Biz bilan tez qulay hamroh toping.</h3>
            <ul className="flex items-center justify-center gap-8">
                {
                    items.map(item => {
                        return <li key={item.link}>
                            <Link href={item.link}>
                                {item.icon}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}
