"use client";
import Image from "next/image";
import BackButton from "../common/button/BackButton";
import { usePathname, useSearchParams } from "next/navigation";
import { checkPathname } from "@/lib/util/CheckPathName";
import CustomDialog from "../common/CustomDialog";
import FontSizeSlider from "../mailDetail/mailInfo/FontSizeSlider";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Link from "next/link";
import usePrintStateStore from "@/store/usePrintStateStore";
import { useEffect } from "react";
import usePrintHandler from "@/hooks/usePrintHandler";

function PrintHeader() {
  const params = useSearchParams();
  const pdfURL = params.get("pdf") || "";
  const pathname = usePathname();
  const { materialDetail } = checkPathname(pathname);
  const { handlePrint, isError, isPending, isSuccess } = usePrintHandler(pdfURL);
  const { setState, print } = usePrintStateStore();

  useEffect(() => {
    setState("isError", isError);
    setState("isPending", isPending);
    setState("isSuccess", isSuccess);
  }, [isError, isPending, isSuccess, setState]);

  return (
    <div className="flex items-end w-full">
      {!print && <BackButton />}

      <div className="flex justify-end w-full gap-6 py-2">
        {materialDetail ? (
          <button
            type="button"
            onClick={() => handlePrint(pdfURL)}
            style={{ visibility: print ? "hidden" : "visible" }}
          >
            <Image src="/print.png" width={24} height={24} alt="print" />
          </button>
        ) : (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <button>
                  <Image src="/custom_typography.png" width={18} height={18} alt="custom_typography" />
                </button>
              </DialogTrigger>
              <CustomDialog title="Font Size Setting">
                <FontSizeSlider />
              </CustomDialog>
            </Dialog>
            <Link href={`${pathname}/print`}>
              <Image src="/print.png" width={24} height={24} alt="print" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default PrintHeader;
