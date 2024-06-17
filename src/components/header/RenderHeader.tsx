"use client";

import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";
import SendHeader from "./SendHeader";

function RenderHeader() {
  const pathname = usePathname();

  const renderHeader = () => {
    if (pathname === "/") {
      return <MainHeader />;
    }

    if (pathname === "/send") {
      return <SendHeader />;
    }
    if (pathname === "/mail") {
      return <div>mail</div>;
    }
  };

  return renderHeader();
}

export default RenderHeader;
