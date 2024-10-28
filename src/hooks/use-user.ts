import useSWR from "swr";

import { fetcher } from "@/libs/fetcher";

const useUser = (userId: string) => {
  const { data, isLoading, mutate } = useSWR(
    userId ? `/api/user/${userId}` : null,
    fetcher
  );

  return { data, isLoading, mutate };
};

export default useUser;
