import { usePathname } from "next/navigation";
import BackButton from "../common/button/BackButton";
import SendHeader from "./simple/SendHeader";
import ScanHeader from "./simple/ScanHeader";
import OriginImageHeader from "./simple/OriginImageHeader";
import PrinterHeader from "./simple/PrinterHeader";
import { checkPathname } from "@/lib/util/CheckPathName";

function SimpleHeader() {
  const pathname = usePathname();
  const { print, isSendmailPath } = checkPathname(pathname);

  return (
    <section className="flex w-full items-center">
      <div className="flex flex-row w-full text-center pr-[22px]">
        <BackButton />
        {isSendmailPath ? (
          <SendHeader />
        ) : pathname === "/mailscan/scan" ? (
          <ScanHeader />
        ) : print ? (
          <PrinterHeader />
        ) : (
          <OriginImageHeader />
        )}
      </div>
    </section>
  );
}

export default SimpleHeader;
