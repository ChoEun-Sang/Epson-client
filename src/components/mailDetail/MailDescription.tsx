"use client";

import { MailDetailData } from "@/lib/types/mailDetailTypes";
import { formatDate } from "@/lib/util/utilFunctions";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogPortal, DialogTrigger } from "../ui/dialog";

function MailDescription({ title, letterImageUrl, createdAt, sender }: MailDetailData) {
  return (
    <div className="w-full flex flex-col gap-y-1">
      <p className="font-bold text-[22px] text-text-sub">{title}</p>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-y-1">
          <p className="font-medium text-text-info">from.{sender}</p>
          <p className="text-xs text-text-disabled">{formatDate(createdAt)}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="bg-primary-8 font-bold text-xs px-2 h-[32px]">
              원본보기
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogContent className="h-[800px] w-[375px]" hideCloseButton>
              {/* 추후 이미지 추가되면 구성 */}
              <div className="bg-pink-200">사진</div>
              <DialogClose className="w-10 h-5 absolute right-5 top-5">종료 버튼</DialogClose>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </div>
  );
}

export default MailDescription;
