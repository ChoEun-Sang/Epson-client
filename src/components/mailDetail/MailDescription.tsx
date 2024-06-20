"use client";

import { LetterDetailInfo } from "@/lib/types/mailDetailTypes";
import { formatDate } from "@/lib/util/utilFunctions";
import CustomDialog from "../common/CustomDialog";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

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
          <CustomDialog title="편지 원본">
            <iframe
              scrolling="no"
              className="main"
              src={`https://aigooback.blob.core.windows.net${letterImageUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              width={"100%"}
              height={"100%"}
            />
          </CustomDialog>
        </Dialog>
      </div>
    </div>
  );
}

export default MailDescription;
