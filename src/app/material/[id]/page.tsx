"use client";
import PrintLoading from "@/components/common/loading/PrintLoading";
import MaterialPDF from "@/components/material/MaterialPDF";
import usePrintStateStore from "@/store/usePrintStateStore";
import { useSearchParams } from "next/navigation";

function PDF() {
  const searchParams = useSearchParams();
  const { print } = usePrintStateStore();
  const pdfURL = searchParams.get("pdf") || "";
  const { isError, isPending, isSuccess } = usePrintStateStore();

  return (
    <>
      {print ? (
        <PrintLoading isPending={isPending} isSuccess={isSuccess} isError={isError} />
      ) : (
        <MaterialPDF pdfURL={pdfURL || ""} />
      )}
    </>
  );
}

export default PDF;
