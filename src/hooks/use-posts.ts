import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";

const usePosts = (userId?: string) => {
  const url = userId ? `/api/post?userId=${userId}` : "/api/post";

  const { data, isLoading, mutate } = useSWR(url, fetcher);

  return { data, isLoading, mutate };
};

export default usePosts;
