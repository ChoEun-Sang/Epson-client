"use client";

import PrintLoading from "@/components/common/loading/PrintLoading";
import MailDescription from "@/components/mailDetail/mailInfo/MailDescription";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useGetMailDetail from "@/hooks/queries/useGetMailDetail";
import usePrintHandler from "@/hooks/usePrintHandler";
import { IMAGE_BASE_URL, NO_TOOL_BAR, REG_EXP } from "@/lib/constants/constants";
import usePrintStateStore from "@/store/usePrintStateStore";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { isEnglishSentence } from "@/lib/util/utilFunctions";

function PrintMail() {
  const [printType, setPrintType] = useState<string>("image");
  const { letterDocumentId } = useParams();
  const { data, isLoading } = useGetMailDetail(letterDocumentId as string);
  const imageURL = IMAGE_BASE_URL + data?.letterDocument.pages[0].url + NO_TOOL_BAR;
  const { print } = usePrintStateStore();
  const { handlePrint, isError, isPending, isSuccess } = usePrintHandler(imageURL);

  const renderImage = (url: string) => {
    if (imageURL.includes("pdf")) {
      return <iframe src={url} width={"100%"} height={"100%"} />;
    }
    return <Image src={url} alt="" fill />;
  };

  // 현재는 사진만 인쇄하도록 전달
  // 추후 텍스트 인쇄 방식이 추가되면 기능 추가 예정

  const renderPrintContent = (type: string) => {
    switch (type) {
      case "image":
        return <div className="w-full h-full pb-20 relative">{renderImage(imageURL)}</div>;
      case "text":
        return (
          <ul className="flex flex-col gap-y-3">
            {data?.letterDocument.pages[0].originText.map((sentence, index) => {
              const isEnglish = isEnglishSentence(sentence);
              const krSentence = isEnglish
                ? data?.letterDocument.pages[0].translatedText[index]
                : data?.letterDocument.pages[0].originText[index];
              const EnSentence = isEnglish
                ? data?.letterDocument.pages[0].originText[index]
                : data?.letterDocument.pages[0].translatedText[index];
              return (
                <li key={index} className="flex gap-x-2">
                  <span className="text-xs font-bold text-primary-3">{index + 1}</span>
                  <div className="flex-flex-col text-start">
                    <p className="text-text-info">{krSentence.replace(REG_EXP, "$1")}</p>
                    <p className="text-text-info text-sm">{EnSentence}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        );
      case "all":
        return (
          <div className="flex-flex-col h-full">
            <div className="w-full h-[300px] mb-4 relative">{renderImage(imageURL)}</div>
            <ul className="flex flex-col gap-y-3">
              {data?.letterDocument.pages[0].originText.map((sentence, index) => {
                const isEnglish = isEnglishSentence(sentence);
                const krSentence = isEnglish
                  ? data?.letterDocument.pages[0].translatedText[index]
                  : data?.letterDocument.pages[0].originText[index];
                const EnSentence = isEnglish
                  ? data?.letterDocument.pages[0].originText[index]
                  : data?.letterDocument.pages[0].translatedText[index];
                return (
                  <li key={index} className="flex gap-x-2">
                    <span className="text-xs font-bold text-primary-3">{index + 1}</span>
                    <div className="flex-flex-col text-start">
                      <p className="text-text-info">{krSentence.replace(REG_EXP, "$1")}</p>
                      <p className="text-text-info text-sm">{EnSentence}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
    }
  };

  return (
    <>
      {print ? (
        <PrintLoading isPending={isPending} isSuccess={isSuccess} isError={isError} />
      ) : (
        <section
          style={{ maxHeight: "calc(100vh - 98px)" }}
          className="innerheight flex flex-col justify-between gap-5"
        >
          <MailDescription letterInfoData={data?.letter} dialog={false} />
          {isLoading ? (
            <Skeleton className="w-full h-[300px]" />
          ) : (
            <div className="w-full h-full scrollon">{renderPrintContent(printType)}</div>
          )}
          <div className="flex flex-col gap-y-3 items-center">
            <ToggleGroup type="single" defaultValue={printType} onValueChange={(value) => setPrintType(value)}>
              <ToggleGroupItem value="image">Image</ToggleGroupItem>
              <ToggleGroupItem value="text">Text</ToggleGroupItem>
              <ToggleGroupItem value="all">All</ToggleGroupItem>
            </ToggleGroup>
            <Button
              onClick={() => data && handlePrint(data?.letterDocument.pages[0].url)}
              className="bg-primary-8 w-full font-bold h-14 mb-4"
            >
              Print
            </Button>
          </div>
        </section>
      )}
    </>
  );
}

export default PrintMail;
