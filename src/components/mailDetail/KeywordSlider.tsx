// components/KeywordSlider.tsx
"use client";

import useMailDetailStore from "@/store/useMailDetailStore";
import { getKeywordsInSentence } from "@/lib/util/utilFunctions";
import { Dispatch, SetStateAction } from "react";

interface KeywordSliderProps {
  currentKeywordIndex: number;
  setCurrentKeywordIndex: Dispatch<SetStateAction<number>>;
}

function KeywordSlider({ currentKeywordIndex, setCurrentKeywordIndex }: KeywordSliderProps) {
  const { selectedText, selectedTranslatedText, keywords } = useMailDetailStore();
  const keywordsInSentence = getKeywordsInSentence(selectedText);
  const currentKeyword = keywordsInSentence[currentKeywordIndex];

  return (
    <div className="flex flex-col overflow-hidden bg-secondary-1 w-full">
      <span className="font-medium text-primary-5">number</span>
      <div className="flex gap-x-2 w-[1000px] overflow-x-auto">
        {keywordsInSentence.map((keyword, index) => (
          <button
            className={`${keyword === currentKeyword ? "border-primary-5" : "border-gray-4"} ${
              keywords.includes(keyword) ? "text-primary-8" : "text-text-sub"
            } px-4 py-2 border-2 bg-white rounded-lg text-[22px] font-bold`}
            key={index}
            onClick={() => {
              setCurrentKeywordIndex(index);
            }}
          >
            {keyword}
          </button>
        ))}
      </div>
      <span className="font-medium text-text-info">{selectedTranslatedText}</span>
    </div>
  );
}

export default KeywordSlider;
