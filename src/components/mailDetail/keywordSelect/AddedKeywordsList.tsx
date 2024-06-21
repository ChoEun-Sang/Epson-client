"use client";

import useMailDetailStore from "@/store/useMailDetailStore";
import { getKeywordsInSentence } from "@/lib/util/utilFunctions";

function AddedKeywordsList() {
  const { selectedText, keywords } = useMailDetailStore();
  const keywordsInSentence = getKeywordsInSentence(selectedText);
  const addedKeywordsInThisSentence = keywords.filter((keyword) => keywordsInSentence.includes(keyword));

  return (
    <>
      <div className="flex items-center gap-x-2">
        <span className="font-bold text-[22px] text-text-sub">이 문장에서 추가한 단어</span>
        <span className="text-sm text-primary-5 font-bold">{addedKeywordsInThisSentence.length}</span>
      </div>
      <ul className="flex gap-x-2">
        {addedKeywordsInThisSentence.map((keyword, index) => (
          <li key={index} className="bg-primary-2 text-primary-8 px-2 py-1 text-xs font-semibold rounded-2xl">
            {keyword}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddedKeywordsList;
