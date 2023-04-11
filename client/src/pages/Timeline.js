import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import InstaCard from "../components/InstaCard";

export default function Timeline() {
  const { loading, data, error } = useQuery(QUERY_POSTS);
  if (data) {
    console.log(data);
  }
  if(error){
    console.log(error);
  }
  return (
    <>
      {data && (
        <div>
          {data.posts.map((post) => {
            console.log(post);
            return (
              <InstaCard
                key={post._id}
                comments={post.comments}
                imageSrc={post.post}
                caption={post.description}
                user={post.username}
                profilePic = {post.profilePic}
                post = {post._id}
                timestamp = {post.date}
                like = {post.likes}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
