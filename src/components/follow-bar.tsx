/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { User } from "@/types/user-types";
import Avatar from "./avatar";
import useUsers from "@/hooks/use-users";
import { useSession } from "next-auth/react";

const FollowBar = () => {
  const { data, isLoading } = useUsers();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  return (
    <div
      className="
        mx-6
        hidden
        lg:block
        py-4
      "
    >
      <div className="bg-neutral-800 rounded-xl p-4">
        {isLoading ? (
          <div className="text-white text-xl font-semibold text-center">
            Loading...
            <p className="block mt-4 mx-auto w-8 h-8 rounded-full animate-spin border-4 border-white border-r-gray-500"></p>
          </div>
        ) : (
          <>
            <h2 className="text-white font-semibold text-xl">Who to follow</h2>
            <div className="flex flex-col gap-6 mt-4">
              {data.users
                .filter((user: User) => user.id !== userId)
                .map((user: User) => (
                  <div key={user.id} className="flex flex-row gap-4">
                    <Avatar userId={user.id} />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-white">
                        {user.name}
                      </p>
                      <span className="text-[10px] font-light text-neutral-400 pt-[1px]">
                        @{user.username}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FollowBar;
