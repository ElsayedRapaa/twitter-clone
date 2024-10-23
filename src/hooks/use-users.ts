import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";

const useUsers = () => {
  const { data, isLoading } = useSWR("/api/user", fetcher);

  return { data, isLoading };
};

export default useUsers;
