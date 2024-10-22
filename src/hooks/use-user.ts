import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";

const useUser = (userId: string) => {
  const { data, isLoading } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return { data, isLoading };
};

export default useUser;
