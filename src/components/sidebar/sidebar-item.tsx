"use server";

import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="
          h-14
          w-14
          flex
          items-center
          justify-center
          hover:bg-slate-300
          hover:bg-opacity-10
          transition
          cursor-pointer
          lg:hidden
          relative
          rounded-full
        "
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className="
          relative
          lg:flex
          items-rcenterow
          gap-4
          rounded-full
          cursor-pointer
          hover:bg-slate-300
          hover:bg-opacity-10
          hidden
          p-4
        "
      >
        <Icon size={24} color="white" />
        <p className="text-white text-lg">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
