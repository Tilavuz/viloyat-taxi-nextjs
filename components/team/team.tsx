import Image from "next/image";

export default function Team({ imgUrl, position, name }: { imgUrl: string, position: string, name: string }) {
  return (
    <div className="bg-gradient-to-t to-[#f5b40d] from-[#CDA311] p-16 rounded-xl flex flex-col justify-start">
        <div>
            <Image 
                src={imgUrl}
                alt={name}
            />
        </div>
        <div className="text-white text-center">
            <h3 className="text-3xl font-bold">{position}</h3>
            <h4 className="text-2xl">{name}</h4>
        </div>
    </div>
  )
}
