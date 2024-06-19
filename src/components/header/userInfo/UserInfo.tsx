import { MouseEvent, useRef, useState } from "react";
import Image from "next/image";
import useUserStore from "@/store/useUserStore";
import { deleteAccessTokenFromCookie } from "@/lib/util/cookies";
import useOutsideClick from "@/hooks/useOutsideClick";

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
  };

  const { img /* , id, username, myFavorite, epsonDevice */ } = userData || {};

  return (
    <>
      <div className="flex justify-center w-12">
        <button className="w-6 h-6 rounded-full" onClick={toggleMyList}>
          <Image src={img || `/default_profile.svg`} width={24} height={24} alt="프로필 이미지" />
        </button>
      </div>
      {isOpen && (
        <ul ref={dropdownRef} className="absolute bg-background border border-gray-300 rounded shadow-lg z-10 mt-10">
          <li>
            <button type="button" className="w-full text-left py-2 px-4 hover:bg-gray-100" onClick={handleSignout}>
              로그아웃
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default UserInfo;
