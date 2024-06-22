"use client";

import useMailListQuery from "@/hooks/queries/useMailListQuery";
import { useEffect, useState } from "react";
import LetterImage from "./LetterImage";

export interface MailItem {
  id: number;
  title: string;
  letterDocumentId: string | null;
  createdAt: string;
  status: string;
  letterImage: string | null;
}

function DynamicLetterComponent() {
  const { data: mailListData } = useMailListQuery("received");
  const [recentLetters, setRecentLetters] = useState<MailItem[]>([]);

  useEffect(() => {
    if (mailListData) {
      const slicedData = mailListData.slice(0, 4);
      setRecentLetters(slicedData);
    }
  }, [mailListData]);

  return (
    <div className="gap-2 grid grid-cols-2">
      {recentLetters.length > 0 ? (
        recentLetters.map((item: MailItem) => (
          <div key={item.id} className="flex flex-col gap-2 cursor-pointer">
            <LetterImage item={item} letterDocumentId={item.letterDocumentId} />
          </div>
        ))
      ) : (
        <div className="col-span-2 text-center w-full h-[252px]">No recent letters available</div>
      )}
    </div>
  );
}

export default DynamicLetterComponent;
