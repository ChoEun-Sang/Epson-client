import { ReactNode } from "react";
import Link from "next/link";
import useIsCheckedStore from "@/store/useIsCheckedStore";

const NavMenu = ({ children, path }: { children: ReactNode; path: string }) => {
  const setCheckedItems = useIsCheckedStore((state) => state.setCheckedItems);

  const handleCheckedMenu = () => {
    setCheckedItems(path);
  };

  return (
    <li onClick={handleCheckedMenu}>
      <Link href={path}>{children}</Link>
    </li>
  );
};

export default NavMenu;
