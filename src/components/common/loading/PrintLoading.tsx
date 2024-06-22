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
      return <Image src="/error.svg" width={240} height={240} alt="error" />;
    }
    return null;
  };

  const renderMessage = () => {
    if (isPending) return study ? "자료 인쇄 중" : "편지 인쇄 중";
    if (isSuccess) return study ? "인쇄 성공!" : "편지 인쇄 성공!";
    if (isError) return "에러 발생!";
    return "";
  };

  return (
    <section className="innerheight flex justify-center items-center flex-col relative">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {renderImage()}
        <div className="text-center title2 mt-8">
          <p>{renderMessage()}</p>
        </div>
      </div>
      {(isSuccess || isError) && (
        <Button onClick={() => setPrint(false)} className="w-full h-14 bg-primary-8 font-bold absolute bottom-9">
          닫기
        </Button>
      )}
    </section>
  );
}

export default PrintLoading;
