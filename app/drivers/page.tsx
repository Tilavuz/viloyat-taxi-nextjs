"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/posts/post";
import { DriverPost } from "@/interfaces/user-post-interface";
const url = process.env.NEXT_PUBLIC_API_URL;

export default function Drivers() {

  const [driversPosts, setDriversPosts] = useState<DriverPost[]>();


  useEffect(() => {
    const getDriverPosts = async () => {
      const res = await axios.get(url + "/drivers/posts");
      setDriversPosts(res.data);
    };
    getDriverPosts();
  }, []);

  return (
    <div className="flex gap-8 flex-wrap">
      {driversPosts?.map((driversPost) => {
        return (
          <Post
            key={driversPost._id}
            _id={driversPost._id}
            createdAt={driversPost.createdAt}
            price={driversPost.price}
            role="driver"
            number_of_passengers={driversPost.number_of_passengers}
            passengers_id={driversPost.passengers_id}
            travel_date={driversPost.travel_date}
            additional_info={driversPost.additional_info}
            start_city={driversPost.start_city}
            destination_city={driversPost.destination_city}
          />
        );
      })}
    </div>
  )
}
