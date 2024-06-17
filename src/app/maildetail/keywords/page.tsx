"use client";

import { getKeywordsInSentence } from "@/lib/util/utilFunctions";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SelectKeywords() {
  const router = useRouter();
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState<number>(0);
  const { selectedText, selectedTranslatedText, keywords, addKeyword, deleteKeyword } = useMailDetailStore();
  const keywordsInSentence = getKeywordsInSentence(selectedText);
  const currentKeyword = keywordsInSentence[currentKeywordIndex];
  const isKeywordIncluded = keywords.includes(currentKeyword);
  const addedKeywordsInThisSentence = keywords.filter((keyword) => keywordsInSentence.includes(keyword));

  // 추후 letterId로 동적 라우팅 처리
  if (!selectedText) {
    router.push("/maildetail/");
  }

  return (
    <section className="flex flex-col gap-y-3">
      {/* 키워드 슬라이더 */}
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
      {/* 키워드 설명 및 추가/제거 버튼 */}
      <div className="flex flex-col">
        <div className="flex gap-x-2">
          <span className="font-bold text-primary-5 text-xs">뜻</span>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <p className="font-bold text-text-sub py-1">{currentKeyword}</p>
              <button
                className={`${
                  isKeywordIncluded ? "bg-gray-1 text-text-info" : "bg-primary-8 text-white"
                } font-bold rounded-lg text-xs px-2 whitespace-nowrap`}
                onClick={() => (isKeywordIncluded ? deleteKeyword(currentKeyword) : addKeyword(currentKeyword))}
              >
                {isKeywordIncluded ? "제거하기" : "추가하기"}
              </button>
            </div>
            <span className="text-sm font-semibold text-text-disabled">[영문 뜻]</span>
          </div>
        </div>
        <div className="bg-yellow-100">번역 api 내용 들어가는 곳</div>
      </div>
      {/* 추가된 단어 목록 */}
      <div className="flex items-center gap-x-2">
        <span className="font-bold text-[22px] text-text-sub">이 문장에서 추가한 단어 </span>
        <span className="text-sm text-primary-5 font-bold">{addedKeywordsInThisSentence.length}</span>
      </div>
      <ul className="flex gap-x-2">
        {addedKeywordsInThisSentence.map((keyword, index) => (
          <li key={index} className="bg-primary-2 text-primary-8 px-2 py-1 text-xs font-semibold rounded-2xl">
            {keyword}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectKeywords;
