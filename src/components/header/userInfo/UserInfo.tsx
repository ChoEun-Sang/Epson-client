import { MouseEvent, useRef, useState } from "react";
import Image from "next/image";
import useUserStore from "@/store/useUserStore";
import { deleteAccessTokenFromCookie } from "@/lib/util/cookies";
import useOutsideClick from "@/hooks/useOutsideClick";
import { toast } from "sonner";

function UserInfo() {
  const { userData, resetUserData } = useUserStore();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const toggleMyList = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleSignout = () => {
    deleteAccessTokenFromCookie();
    resetUserData();
    setIsOpen(false);
    toast.success("You've been logged out!");
  };

  const { img } = userData || {};

  return (
    <>
      <div className="flex">
        <button className="w-6 h-6 rounded-full" onClick={toggleMyList}>
          <Image src={img || `/default_profile.svg`} width={24} height={24} alt="profile_image" />
        </button>
      </div>
      {isOpen && (
        <ul ref={dropdownRef} className="absolute bg-background border border-gray-300 rounded shadow-lg z-10 mt-10">
          <li>
            <button type="button" className="w-full text-left py-2 px-4 hover:bg-gray-100" onClick={handleSignout}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default UserInfo;
