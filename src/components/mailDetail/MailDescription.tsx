"use client";

import { LetterDetailInfo } from "@/lib/types/mailDetailTypes";
import { formatDate } from "@/lib/util/utilFunctions";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogPortal, DialogTrigger } from "../ui/dialog";

interface MailDescriptionProps {
  letterImageUrl: string | undefined;
  letterInfoData: LetterDetailInfo | undefined;
}

function MailDescription({ letterImageUrl, letterInfoData }: MailDescriptionProps) {
  return (
    <div className="w-full flex flex-col gap-y-1">
      <p className="font-bold text-[22px] text-text-sub">{letterInfoData?.title}</p>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-y-1">
          <p className="font-medium text-text-info">from.{letterInfoData?.sender.username}</p>
          <p className="text-xs text-text-disabled">{letterInfoData && formatDate(letterInfoData?.createdAt)}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="bg-primary-8 font-bold text-xs px-2 h-[32px]">
              원본보기
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogContent className="h-[800px] w-[375px] bg-pink-200" hideCloseButton>
              {/* 추후 이미지 추가되면 구성 */}
              <div className="">사진</div>
              <div className="relative w-full h-full">
                <iframe
                  src={`https://aigooback.blob.core.windows.net${letterImageUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
              {/* <iframe
                // id="inlineFrameExample"
                // title="Inline Frame Example"
                width="300"
                height="200"
                src="https://aigooback.blob.core.windows.net/4c0e7b28-17b8-4103-b80e-c53b14fb91d1/6672e1a5c3cc69c0dd05174e.pdf"
              ></iframe> */}
              <DialogClose className="w-10 h-5 absolute right-5 top-5">종료 버튼</DialogClose>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </div>
  );
}

export default MailDescription;
