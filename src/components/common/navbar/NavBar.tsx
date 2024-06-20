"use client";

import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import { ITEMS } from "@/lib/constants/navMenuItems";
import {
  MAILSCAN_PATH,
  MAILUPLOAD_PATH,
  SCAN_PATH,
  KEYWORDS_PATH,
  PRINT_PATH,
  ORIGINALIMAGE_PATH,
  MATERIAL_DETAIL_PATH,
} from "@/lib/constants/pathname";

const NavBar = () => {
  const pathname = usePathname();

  const invisiblePaths = [
    MAILSCAN_PATH,
    MAILUPLOAD_PATH,
    SCAN_PATH,
    KEYWORDS_PATH,
    PRINT_PATH,
    ORIGINALIMAGE_PATH,
    MATERIAL_DETAIL_PATH,
  ];

  const invisibleNav = invisiblePaths.includes(pathname);

  return (
    !invisibleNav && (
      <nav className="bg-background max-w-[375px] h-20 sticky bottom-0 left-0 right-0 mx-auto">
        <ul className="h-full flex justify-around items-center">
          {ITEMS.map((item) => (
            <NavMenu key={item.ko} path={item.path}>
              {item.ko}
            </NavMenu>
          ))}
        </ul>
      </nav>
    )
  );
};

export default NavBar;
