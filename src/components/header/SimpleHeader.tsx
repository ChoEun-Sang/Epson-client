import { usePathname } from "next/navigation";
import BackButton from "../common/button/BackButton";
import SendHeader from "./simple/SendHeader";
import ScanHeader from "./simple/ScanHeader";
import OriginImageHeader from "./simple/OriginImageHeader";
import PrinterHeader from "./simple/PrinterHeader";
import { checkPathname } from "./RenderHeader";

function SimpleHeader() {
  const pathname = usePathname();
  const { print } = checkPathname(pathname);

  return (
    <section className="flex w-full items-center">
      <BackButton />
      {pathname === "/sendmail" ? (
        <SendHeader />
      ) : pathname === "/sendmail/scan" ? (
        <ScanHeader />
      ) : print ? (
        <PrinterHeader />
      ) : (
        <OriginImageHeader />
      )}
    </section>
  );
}

export default SimpleHeader;
