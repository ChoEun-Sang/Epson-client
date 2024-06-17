// components/KeywordSlider.tsx
"use client";

import { motion } from "framer-motion";
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
  const sliderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="flex flex-col bg-secondary-1 -ml-4 w-[375px] px-4">
      <span className="font-medium text-primary-5">number</span>
      <motion.div
        className="flex gap-x-2 whitespace-nowrap overflow-x-auto"
        initial="hidden"
        animate="visible"
        variants={sliderVariants}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
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
      </motion.div>
      <span className="font-medium text-text-info">{selectedTranslatedText}</span>
    </div>
  );
}

export default KeywordSlider;
