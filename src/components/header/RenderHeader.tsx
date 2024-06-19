"use client";

import { usePathname } from "next/navigation";
import UserHeader from "./UserHeader";
import SimpleHeader from "./SimpleHeader";
import BackHeader from "./BackHeader";
import { KEYWORDS_PATH, MATERIAL_DETAIL_PATH, ORIGINALIMAGE_PATH, PRINT_PATH } from "@/lib/constants/pathname";
import PrintHeader from "./PrintHeader";

export const checkPathname = (pathname: string) => {
  const originalImage = ORIGINALIMAGE_PATH.test(pathname);
  const print = PRINT_PATH.test(pathname);
  const keywords = KEYWORDS_PATH.test(pathname);
  const materialDetail = MATERIAL_DETAIL_PATH.test(pathname);

  return { originalImage, print, keywords, materialDetail };
};

function RenderHeader() {
  const pathname = usePathname();

  const { originalImage, print, keywords, materialDetail } = checkPathname(pathname);

  const sendmailPaths = ["/sendmail", "/sendmail/scan"];
  const userHeaderGroup = ["/", "/mailbox", "/material"];

  const isSendmailPath = sendmailPaths.includes(pathname);
  const isUserHeader = userHeaderGroup.includes(pathname);

  if (isUserHeader) {
    return <UserHeader />;
  } else if (isSendmailPath || originalImage || print) {
    return <SimpleHeader />;
  } else if (keywords || materialDetail) {
    return <PrintHeader />;
  } else {
    return <BackHeader />;
  }
}

export default RenderHeader;
