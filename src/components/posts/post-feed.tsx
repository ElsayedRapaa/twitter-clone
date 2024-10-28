"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import usePosts from "@/hooks/use-posts";
import PostItem from "./post-item";
import { ClipLoader } from "react-spinners";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [], isLoading } = usePosts(userId);

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center pt-8">
        <ClipLoader color="lightblue" size={50} />
      </div>
    );
  }
  return (
    <>
      {posts.posts.map((post: Record<string, any>) => (
        <PostItem key={post.id} userId={post.userId} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
