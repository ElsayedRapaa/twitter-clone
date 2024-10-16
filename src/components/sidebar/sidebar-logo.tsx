"use client";

import { BsTwitter } from "react-icons/bs";

import { useRouter } from "next/navigation";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      className="h-14 w-14 rounded-full cursor-pointer p-4 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 transition"
      onClick={() => router.push("/")}
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
