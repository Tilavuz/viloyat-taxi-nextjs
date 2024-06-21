"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/posts/post";
import { PassengerPost } from "@/interfaces/user-post-interface";
const url = process.env.NEXT_PUBLIC_API_URL;

export default function Passengers() {
  const [passengersPosts, setPassengersPosts] = useState<PassengerPost[]>();

  useEffect(() => {
    const getPassengerPosts = async () => {
      const res = await axios.get(url + "/passengers/posts");
      setPassengersPosts(res.data);
    };
    getPassengerPosts();
  }, []);

  return (
    <div className="flex gap-8 flex-wrap">
      {passengersPosts?.map((passengersPost) => {
        return (
          <Post
            key={passengersPost._id}
            _id={passengersPost._id}
            createdAt={passengersPost.createdAt}
            price={passengersPost.price}
            role="passenger"
            number_of_passengers={passengersPost.number_of_passengers}
            drivers_id={passengersPost.drivers_id}
            travel_date={passengersPost.travel_date}
            additional_info={passengersPost.additional_info}
            start_city={passengersPost.start_city}
            destination_city={passengersPost.destination_city}
          />
        );
      })}
    </div>
  );
}
