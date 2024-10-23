"use client";

import { useMemo } from "react";
import { format } from "date-fns";

import useUser from "@/hooks/use-user";
import { useSession } from "next-auth/react";
import Button from "../button";
import { BiCalendar } from "react-icons/bi";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: session } = useSession();
  const { data: fetchUser } = useUser(userId);
  const currentId = session?.user?.id;

  const createdAt = useMemo(() => {
    if (!fetchUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchUser?.createdAt), "dd, MMM, yyyy");
  }, [fetchUser?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentId === userId ? (
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          <Button secondary label="Follow" onClick={() => {}} />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="sm:text-2xl text-lg font-semibold text-white">
            {fetchUser?.name}
          </p>
          <p className="text-neutral-500 text-sm">@{fetchUser?.username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{fetchUser?.bio}</p>
          <div className="flex flex-row items-center gap-2 mt-4 text-neutral-500 text-sm">
            <BiCalendar size={20} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-x-2">
            <p className="text-white">{fetchUser?.followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p className="text-white">{fetchUser?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
