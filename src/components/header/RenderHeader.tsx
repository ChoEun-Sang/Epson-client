"use client";

import { usePathname } from "next/navigation";
import UserHeader from "./UserHeader";
import SimpleHeader from "./SimpleHeader";
import BackHeader from "./BackHeader";
import PrintHeader from "./PrintHeader";
import { checkPathname } from "@/lib/util/CheckPathName";

function RenderHeader() {
  const pathname = usePathname();

  const { originalImage, print, mailboxDetail, materialDetail, isSendmailPath, isUserHeader } = checkPathname(pathname);

  if (isUserHeader) {
    return <UserHeader />;
  } else if (isSendmailPath || originalImage || print) {
    return <SimpleHeader />;
  } else if (mailboxDetail || materialDetail) {
    return <PrintHeader />;
  } else {
    return <BackHeader />;
  }
}

export default RenderHeader;
