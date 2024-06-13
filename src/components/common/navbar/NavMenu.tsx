import { ReactNode } from "react";
import Link from "next/link";

const NavMenu = ({ children, path }: { children: ReactNode; path: string }) => {
  return (
    <li>
      <Link href={path}>{children}</Link>
    </li>
  );
};

export default NavMenu;
