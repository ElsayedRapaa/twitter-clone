"use client";

import { useCallback } from "react";

import useLoginModal from "@/hooks/use-login-modal";

import { FaFeather } from "react-icons/fa";

const SidebarTweet = () => {
  const loginModal = useLoginModal();

  // TODO REPLACE THIS LOGIC AFTER CREATE SESSION
  const handleClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={handleClick}>
      <div
        className="
          h-14
          w-14
          rounded-full
          flex
          items-center
          justify-center
          cursor-pointer
          lg:hidden
          bg-sky-500
          hover:bg-opacity-80
          transition
          mt-6
        "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
          lg:flex
          items-center
          justify-center
          hidden
          py-2
          w-[230px]
          bg-sky-500
          text-white
          cursor-pointer
          mt-6
          rounded-full
          hover:bg-opacity-80
          transition
          text-[20px]
          font-semibold
        "
      >
        Tweet
      </div>
    </div>
  );
};

export default SidebarTweet;
