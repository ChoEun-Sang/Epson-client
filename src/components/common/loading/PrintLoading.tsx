"use client";

import { Button } from "@/components/ui/button";
import usePrintStateStore from "@/store/usePrintStateStore";
import Image from "next/image";

interface PrintLoadingProps {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  study?: boolean;
}

function PrintLoading({ isPending, isSuccess, isError, study }: PrintLoadingProps) {
  const { setPrint } = usePrintStateStore();
  const renderImage = () => {
    if (isPending) {
      return <Image src="/printing.gif" width={240} height={240} alt="printing" />;
    }
    if (isSuccess) {
      return <Image src="/check.png" width={240} height={240} alt="success" />;
    }
    if (isError) {
      return <Image src="/printerror.gif" width={240} height={240} alt="error" />;
    }
    return null;
  };

  const renderMessage = () => {
    if (isPending) return study ? "Printing Note" : "Printing letter";
    if (isSuccess) return study ? "Printing success!" : "Letter printing success!";
    if (isError) return "Print Error!";
    return "";
  };

  return (
    <section className="innerheight flex justify-between items-center flex-col">
      <div className="flex flex-col justify-center items-center flex-1">
        {renderImage()}
        <div className="text-center title2 mt-8">
          <p>{renderMessage()}</p>
        </div>
      </div>
      {(isSuccess || isError) && (
        <div className="w-full flex items-end pb-4 pt-6">
          <Button onClick={() => setPrint(false)} className="w-full h-14 bg-primary-8 font-bold">
            Close Print
          </Button>
        </div>
      )}
    </section>
  );
}

export default PrintLoading;
