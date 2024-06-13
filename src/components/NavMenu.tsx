"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

const NavMenu = ({ children, path }: { children: ReactNode; path: string }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <li onClick={handleClick}>
      <button>{children}</button>
    </li>
  );
};

export default NavMenu;
