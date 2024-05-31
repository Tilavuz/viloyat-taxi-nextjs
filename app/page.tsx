import HomeComponent from "@/components/home-component"
import image1 from '../public/image 8.svg'
import image2 from '../public/image 1.svg'
import image3 from '../public/7119303_3411096 1.svg'
import image4 from '../public/car-image.svg'
import HomeContact from "@/components/home-contact"


export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HomeComponent imgUrl={image1} title="Viloyat Taxi" desc="Ilovani yuklab oling va post joylang. Biz bilan tez va qulay hamroh toping !" styles="flex justify-around items-center" btnUrl="https://google.com" btnText="yuklab olish"/>
      <HomeComponent imgUrl={image2} title="Viloyat Taxi" desc="Biz bilan tez va qulay hamroh toping !" styles="flex justify-around items-center flex-row-reverse" btnUrl="/passengers" btnText="Hamroh izlash"/>
      <HomeComponent imgUrl={image3} title="Viloyat Taxi" desc="Biz bilan tez va qulay haydovchi toping !" styles="flex justify-around items-center" btnUrl="https://google.com" btnText="Hamroh izlash"/>
      <HomeComponent imgUrl={image4} title="Biz haqimizda" desc="Bizning maqsadimiz sizga qulaylik yaratib berish. Biz bilan tez qulay hamroh toping." styles="flex justify-around items-center bg-[#f5f5f4] rounded-md" btnUrl="/about" btnText="Batafsil"/>
      <HomeContact />
    </div>
  )
}
