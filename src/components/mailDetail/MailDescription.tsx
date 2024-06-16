"use client";

import { MailDetailData } from "@/lib/types/mailDetailTypes";
import { formatDate } from "@/lib/util/utilFunctions";

function MailDescription({ title, letterImageUrl, createdAt, sender }: MailDetailData) {
  return (
    <div className="w-full flex flex-col">
      <p className="font-bold text-[22px] text-text-sub">{title}</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-medium text-text-info">from.{sender}</p>
          <p className="text-xs text-text-disabled">{formatDate(createdAt)}</p>
        </div>
        <button>원본 보기</button>
      </div>
    </div>
  );
}

export default MailDescription;
