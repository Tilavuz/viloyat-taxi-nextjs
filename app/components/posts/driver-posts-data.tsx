import { UserPostsContext } from "@/context/user-posts-context";
import { useContext } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import image from "@/public/svg direction.svg";
import Link from "next/link";
import { UserContext } from "@/context/user-context";

export default function DriverPostsData() {
  const posts = useContext(UserPostsContext);
  const user = useContext(UserContext)

  const handleDate = (date: string) => {
    const dateMassiv = date.split("T");
    const day = dateMassiv[0].split("-").reverse().join("-");
    const time = dateMassiv[1].slice(0, 5);
    return day + " / " + time;
  };

  return (
    <div className="flex items-start gap-8 flex-wrap pt-8">
      {posts?.map((post) => {
        return (
          <div
            key={post._id}
            className="max-w-[300px] w-full shadow-inner border p-4 rounded-md flex flex-col gap-4"
          >
            <p>{handleDate(post.createdAt)}</p>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Yo`lkira:</p>
                <p className="text-sm font-mono">{post.price} so`m</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Yo`lovchi:</p>
                {
                  user?.role === 'driver' && <Link href={`/profile/${post._id}`} className="text-sm font-mono">
                    {
                      `${post.number_of_passengers} / ${post.passengers_id.length}`
                    }
                  </Link>
                }
                {
                  user?.role === 'passenger' && <p className="text-sm font-mono">{post.number_of_passengers}</p>
                }
              </div>
              {
                user?.role === 'passenger' && (
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Haydovchilar:</p>
                    <Link href={`/profile/${post._id}`} className="text-sm font-mono">{post.drivers_id?.length}</Link>
                  </div>
                )
              }
              <div className="flex justify-between items-center">
                <p className="font-bold">Ketish vaqti:</p>
                <p className="text-sm font-mono">{post.travel_date}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Izoh:</p>
                <p className="text-sm font-mono">{post.additional_info}</p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Qayirdan</p>
                    <p className="text-sm font-mono">{post.start_city}</p>
                  </div>
                  <div>
                    <p className="font-bold">Qayirga</p>
                    <p className="text-sm font-mono">{post.destination_city}</p>
                  </div>
                </div>
                <div>
                  <Image src={image} alt="image" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button variant={"secondary"} className="font-bold">
                Tahrirlash
              </Button>
              <Button variant={"destructive"} className="font-bold">
                O`chirish
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
