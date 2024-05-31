import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HomeComponent({ imgUrl, title, desc, styles, btnUrl, btnText } : { btnText: string, imgUrl: string, title: string, desc: string, styles: string, btnUrl: string }) {
  return (
    <div className={styles}>
      <div>
          <Image 
              src={imgUrl}
              alt={desc}
              loading={"eager"}
          />
      </div>
      <div className="max-w-[600px] flex flex-col items-center">
          <h2 className="font-bold text-6xl text-[#44403c] text-center mb-8">{title}</h2>
          <p className="text-center text-2xl mb-6">{desc}</p>
          <Button asChild variant={'ghost'} className="bg-[#4338ca] text-white hover:text-[#44403c] font-bold text-3xl border-2 flex h-16 items-center">
            <Link href={btnUrl} className="capitalize">{btnText}</Link>
          </Button>
      </div>
    </div>
  )
}
