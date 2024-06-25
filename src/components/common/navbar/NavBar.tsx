"use client";

import Image from "next/image";
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
  MAILBOXL_DETAIL_PATH,
} from "@/lib/constants/pathname";

import useIsCheckedStore from "@/store/useIsCheckedStore";
import { useEffect } from "react";
import useIsCheckedLoadingStroe from "@/store/useIsCheckedLoadingStroe";

const NavBar = () => {
  const pathname = usePathname();

  const { checkedItems, setCheckedItems } = useIsCheckedStore();
  const { isCheckedLoading } = useIsCheckedLoadingStroe();

  useEffect(() => {
    setCheckedItems(pathname);
  }, [pathname, setCheckedItems]);

  const invisiblePaths = [
    MAILSCAN_PATH === pathname,
    MAILUPLOAD_PATH === pathname,
    SCAN_PATH === pathname,
    KEYWORDS_PATH.test(pathname),
    PRINT_PATH.test(pathname),
    ORIGINALIMAGE_PATH.test(pathname),
    MATERIAL_DETAIL_PATH.test(pathname),
    MAILBOXL_DETAIL_PATH.test(pathname),
  ];

  const invisibleNav = invisiblePaths.includes(true);

  if (isCheckedLoading) return;

  return (
    !invisibleNav && (
      <nav className="bg-background w-[375px] h-20 ml-[-16px] sticky bottom-0 left-0 right-0 mx-auto navbar_border shrink-0">
        <ul className="h-full flex justify-around items-center pt-2 pb-8">
          {ITEMS.map((item) => (
            <NavMenu key={item.en} path={item.path}>
              <div className="flex flex-col justify-center items-center gap-1 w-9 h-[46px]">
                <Image
                  src={checkedItems[item.path] ? item.checkedImage : item.image}
                  width={24}
                  height={24}
                  alt={item.en}
                />
                <span className="footnote3 text-text-info">{item.en}</span>
              </div>
            </NavMenu>
          ))}
        </ul>
      </nav>
    )
  );
};

export default NavBar;
