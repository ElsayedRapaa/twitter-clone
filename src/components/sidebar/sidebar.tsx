"use client";

import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import SidebarLogo from "./sidebar-logo";
import SidebarItem from "./sidebar-item";
import SidebarTweet from "./sidebar-tweet";

import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: `/user/${userId}`,
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <aside className="h-full col-span-1 pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              auth={item.auth}
            />
          ))}
          {session && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweet />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
