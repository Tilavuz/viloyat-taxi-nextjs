import AboutComponent from "@/app/components/about-component/about-component";
import { items } from "@/app/components/team/items";
import Team from "@/app/components/team/team"

export default function About() {
  return (
    <div>
      <div className="mb-20">
        <h2 className="font-bold text-5xl text-[#081144] border-l-[16px] pl-4 border-l-[#394ebf] mb-8">Biz haqimizda</h2>
        <AboutComponent />
      </div>
      <div>
        <h2 className="font-bold text-5xl text-[#081144] border-l-[16px] pl-4 border-l-[#f6b40d] mb-8">Bizning jamoa</h2>
        <div className="flex items-start justify-between">
          {
            items.map(item => {
              return <Team key={item.position} imgUrl={item.image} position={item.position} name={item.name} />
            })
          }
        </div>
      </div>
    </div>
  )
}
