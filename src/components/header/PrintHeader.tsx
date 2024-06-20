import Image from "next/image";
import BackButton from "../common/button/BackButton";
import { usePathname } from "next/navigation";
import { checkPathname } from "@/lib/util/CheckPathName";

function PrintHeader() {
  const pathname = usePathname();

  const { materialDetail } = checkPathname(pathname);

  return (
    <div className="flex items-end w-full">
      <BackButton />

      <div className="flex justify-end w-full gap-6 py-2">
        {materialDetail ? (
          ""
        ) : (
          <button>
            <Image src="/custom_typography.png" width={18} height={18} alt="custom_typography" />
          </button>
        )}
        <button>
          <Image src="/print.png" width={24} height={24} alt="print" />
        </button>
      </div>
    </div>
  );
}

export default PrintHeader;
