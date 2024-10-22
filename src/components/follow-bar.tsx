/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { User } from "@/types/user-types";
import Avatar from "./avatar";
import useUsers from "@/hooks/use-users";

const FollowBar = () => {
  const { data, error, isLoading } = useUsers();

  if (error) {
    return (
      <div className="mx-6-500 hidden lg:block py-4">
        <div className="bg-neutral-800 rounded-xl p-4 text-center">
          <p className="text-white w-fit text-xl font-semibold mx-auto">
            {error}
          </p>
        </div>
      </div>
    );
  }

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
          <p className="text-white text-xl font-semibold text-center">
            Loading...
            <span className="block mt-4 mx-auto w-8 h-8 rounded-full animate-spin border-4 border-white border-r-gray-500"></span>
          </p>
        ) : (
          <>
            <h2 className="text-white font-semibold text-xl">Who to follow</h2>
            <div className="flex flex-col gap-6 mt-4">
              {data.data.map((user: User) => (
                <div key={user.id} className="flex flex-row gap-4">
                  <Avatar userId={user.id} />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-white">
                      {user.name}
                    </p>
                    <p className="text-[10px] font-light text-neutral-400 pt-[1px]">
                      @{user.username}
                    </p>
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
