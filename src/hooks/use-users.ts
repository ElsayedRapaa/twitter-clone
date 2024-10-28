import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";

const useUsers = () => {
  const { data, isLoading, mutate } = useSWR("/api/user", fetcher);

  return { data, isLoading, mutate };
};

export default useUsers;
