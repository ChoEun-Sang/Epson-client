"use client";

import MailDescription from "@/components/mailDetail/MailDescription";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useGetMailDetail from "@/hooks/queries/useGetMailDetail";
import { REG_EXP } from "@/lib/constants/constants";
import { useParams } from "next/navigation";
import { useState } from "react";

function PrintMail() {
  const [printType, setPrintType] = useState<string>("image");
  const { letterDocumentId } = useParams();
  const { data, isLoading } = useGetMailDetail(letterDocumentId as string);

  const renderPrintContent = (type: string) => {
    switch (type) {
      case "image":
        return (
          <div className="w-full h-full pb-20">
            <iframe
              scrolling="no"
              className="main border-4"
              src={`https://aigooback.blob.core.windows.net${data?.letterDocument.pages[0].url}#toolbar=0&navpanes=0&scrollbar=0`}
              width={"100%"}
              height={"100%"}
            />
          </div>
        );
      case "text":
        return (
          <ul className="flex flex-col gap-y-3">
            {data?.letterDocument.pages[0].originText.map((originSentence, index) => (
              <li key={index} className="flex gap-x-2">
                <span className="text-xs font-bold text-primary-3">{index + 1}</span>
                <div className="flex-flex-col text-start">
                  <p className="text-text-info">{originSentence.replace(REG_EXP, "$1")}</p>
                  <p className="text-text-info text-sm">{data.letterDocument.pages[0].translatedText[index]}</p>
                </div>
              </li>
            ))}
          </ul>
        );
      case "all":
        return (
          <div className="flex-flex-col">
            <div className="w-full h-[300px] mb-4">
              <iframe
                scrolling="no"
                className="main border-4"
                src={`https://aigooback.blob.core.windows.net${data?.letterDocument.pages[0].url}#toolbar=0&navpanes=0&scrollbar=0`}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <ul className="flex flex-col gap-y-3">
              {data?.letterDocument.pages[0].originText.map((originSentence, index) => (
                <li key={index} className="flex gap-x-2">
                  <span className="text-xs font-bold text-primary-3">{index + 1}</span>
                  <div className="flex-flex-col text-start">
                    <p className="text-text-info">{originSentence.replace(REG_EXP, "$1")}</p>
                    <p className="text-text-info text-sm">{data.letterDocument.pages[0].translatedText[index]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <section className="innerheight flex flex-col justify-between gap-3">
      <MailDescription letterInfoData={data?.letter} dialog={false} />

      {isLoading ? (
        <Skeleton className="w-full h-[300px]" />
      ) : (
        <div className="w-full h-full scrollon">{renderPrintContent(printType)}</div>
      )}
      <div className="flex flex-col gap-y-2 items-center pb-4">
        <ToggleGroup type="single" defaultValue={printType} onValueChange={(value) => setPrintType(value)}>
          <ToggleGroupItem value="image">원본</ToggleGroupItem>
          <ToggleGroupItem value="text">텍스트</ToggleGroupItem>
          <ToggleGroupItem value="all">모두</ToggleGroupItem>
        </ToggleGroup>
        <Button className="bg-primary-8 w-full font-bold h-14">인쇄하기</Button>
      </div>
    </section>
  );
}

export default PrintMail;
