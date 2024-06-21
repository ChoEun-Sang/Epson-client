"use client";

import { usePathname } from "next/navigation";
import UserHeader from "./UserHeader";
import SimpleHeader from "./SimpleHeader";
import BackHeader from "./BackHeader";
import PrintHeader from "./PrintHeader";
import { checkPathname } from "@/lib/util/CheckPathName";
import useScanStore from "@/store/useScanStore";
import { useEffect, useRef } from "react";
import { MAILUPLOAD_PATH, MAIN_PATH, SCAN_PATH } from "@/lib/constants/pathname";
import useSentStore from "@/store/useSentStore";

function RenderHeader() {
  const pathname = usePathname();
  const { scanned, setScanned } = useScanStore();
  const { sent, setSent } = useSentStore();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathname.current === SCAN_PATH && pathname === MAIN_PATH) {
      setScanned(false);
    }

    if (prevPathname.current === MAILUPLOAD_PATH && pathname === MAIN_PATH) {
      setSent(false);
    }
    prevPathname.current = pathname;
  }, [pathname, setScanned, setSent]);

  if (scanned || sent) return null;

  const { originalImage, print, mailboxDetail, materialDetail, isSendmailPath, isUserHeader, isSacnPath } =
    checkPathname(pathname);

  if (isUserHeader) {
    return <UserHeader />;
  } else if (isSendmailPath || originalImage || print || isSacnPath) {
    return <SimpleHeader />;
  } else if (mailboxDetail || materialDetail) {
    return <PrintHeader />;
  } else {
    return <BackHeader />;
  }
}

export default RenderHeader;
