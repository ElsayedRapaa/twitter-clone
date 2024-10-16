"use client";

import { useCallback } from "react";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <header
      className="
        border-b-[1px]
        border-neutral-800
        p-4
        flex
        items-center
        gap-x-4
      "
    >
      {showBackArrow && (
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-300 hover:bg-opacity-10"
          onClick={handleBack}
        >
          <BiArrowBack size={20} color="white" />
        </div>
      )}
      <h2 className="text-white font-semibold text-lg">{label}</h2>
    </header>
  );
};

export default Header;
