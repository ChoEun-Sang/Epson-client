"use client";

import useMailListQuery from "@/hooks/queries/useMailListQuery";
import { useEffect } from "react";
import LetterImage from "./LetterImage";
import useRecentLettersStore from "@/store/useRecentLettersStore";

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
  const { recentLetters, setRecentLetters } = useRecentLettersStore();

  useEffect(() => {
    if (mailListData) {
      const slicedData = mailListData.slice(0, 4);
      setRecentLetters(slicedData);
    }
  }, [mailListData, setRecentLetters]);

  return (
    <div className="gap-2 grid grid-cols-2">
      {recentLetters.length > 0 ? (
        recentLetters.map((item: MailItem) => (
          <div key={item.id} className="flex flex-col gap-2 cursor-pointer">
            <LetterImage item={item} letterDocumentId={item.letterDocumentId} />
          </div>
        ))
      ) : (
        <div className="col-span-2 text-center w-full h-[252px] body2 text-text-info">No recent letters available</div>
      )}
    </div>
  );
}

export default DynamicLetterComponent;
