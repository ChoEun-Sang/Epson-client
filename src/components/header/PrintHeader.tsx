import Image from "next/image";
import BackButton from "../common/button/BackButton";
import { usePathname } from "next/navigation";
import { checkPathname } from "@/lib/util/CheckPathName";
import CustomDialog from "../common/CustomDialog";
import FontSizeSlider from "../mailDetail/FontSizeSlider";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Link from "next/link";

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
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <Image src="/custom_typography.png" width={18} height={18} alt="custom_typography" />
              </button>
            </DialogTrigger>
            <CustomDialog title="글자 크기 설정">
              <FontSizeSlider />
            </CustomDialog>
          </Dialog>
        )}
        <Link href={`${pathname}/print`}>
          <Image src="/print.png" width={24} height={24} alt="print" />
        </Link>
      </div>
    </div>
  );
}

export default PrintHeader;
