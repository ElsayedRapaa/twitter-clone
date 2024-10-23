"use client";

import { use } from "react";
import { ClipLoader } from "react-spinners";
import useUser from "@/hooks/use-user";

import Header from "@/components/header";
import UserHero from "@/components/users/user-hero";
import UserBio from "@/components/users/user-bio";

const UserPage = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);
  const { data: fetchUser, isLoading } = useUser(userId);

  if (isLoading || !fetchUser) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        {/* <div className="w-8 h-8 border-4 border-white border-r-gray-500 rounded-full animate-spin"></div> */}
        <ClipLoader color="lightblue" size={50} />
      </div>
    );
  }

  return (
    <>
      <section>
        <Header label={fetchUser?.name || "User Profile"} showBackArrow />
        <UserHero userId={userId} />
        <UserBio userId={userId} />
      </section>
    </>
  );
};

export default UserPage;
