"use client";

import { MailDetailData } from "@/lib/types/mailDetailTypes";
import { formatDate } from "@/lib/util/utilFunctions";
import { Button } from "../ui/button";

function MailDescription({ title, letterImageUrl, createdAt, sender }: MailDetailData) {
  return (
    <div className="w-full flex flex-col gap-y-1">
      <p className="font-bold text-[22px] text-text-sub">{title}</p>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-y-1">
          <p className="font-medium text-text-info">from.{sender}</p>
          <p className="text-xs text-text-disabled">{formatDate(createdAt)}</p>
        </div>
        <Button variant="destructive" className="bg-primary-8 font-bold text-xs px-2 h-[32px]" onClick={() => {}}>
          원본보기
        </Button>
      </div>
    </div>
  );
}

export default MailDescription;
