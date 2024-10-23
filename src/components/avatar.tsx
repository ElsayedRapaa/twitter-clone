/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useUser from "@/hooks/use-user";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const { data, isLoading } = useUser(userId);
  const router = useRouter();

  const handleClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/user/${userId}`;
      router.push(url);
    },
    [userId, router]
  );

  if (isLoading) {
    return (
      <div>
        <p className="block mt-4 mx-auto w-4 h-4 rounded-full animate-spin border-2 border-white border-r-gray-500"></p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`
          ${hasBorder ? "border-4 border-black" : ""}
          ${isLarge ? "w-32 h-32" : "w-12 h-12"}
          rounded-full
          transition
          hover:opacity-90
          cursor-pointer
          relative
        `}
        onClick={handleClick}
      >
        <Image
          src={data.profileImage || "/images/avatar.jpg"}
          alt="Avatar"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "100%",
          }}
          sizes="(max-width: 128px), (min-width: 48px)"
          onClick={handleClick}
          quality={100}
        />
      </div>
    </>
  );
};

export default Avatar;
