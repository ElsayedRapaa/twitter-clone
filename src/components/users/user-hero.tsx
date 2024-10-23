"use client";

import useUser from "@/hooks/use-user";
import Image from "next/image";
import Avatar from "../avatar";

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchUser } = useUser(userId);

  return (
    <div>
      <div className="bg-neutral-800 h-44 relative">
        {fetchUser?.coverImage && (
          <Image
            src={fetchUser.coverImage}
            alt="Cover Image"
            sizes="()max-width: 128px"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
