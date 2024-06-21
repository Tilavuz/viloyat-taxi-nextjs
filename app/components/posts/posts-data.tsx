import { UserPostsContext } from "@/context/user-posts-context";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";
import Post from "./post";

export default function PostsData() {
  const posts = useContext(UserPostsContext);
  const user = useContext(UserContext);

  return (
    <div className="flex items-start gap-8 flex-wrap pt-8">
      {posts?.map((post) => {
        return (
          <Post
          key={post._id}
            _id={post._id}
            createdAt={post.createdAt}
            price={post.price}
            role={user?.role}
            number_of_passengers={post.number_of_passengers}
            passengers_id={post.passengers_id}
            drivers_id={post.drivers_id}
            travel_date={post.travel_date}
            additional_info={post.additional_info}
            start_city={post.start_city}
            destination_city={post.destination_city}
          />
        );
      })}
    </div>
  );
}
