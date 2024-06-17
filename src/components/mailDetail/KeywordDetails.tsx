"use client";

import useMailDetailStore from "@/store/useMailDetailStore";

interface KeywordDetailsProps {
  currentKeyword: string;
  isKeywordIncluded: boolean;
}

function KeywordDetails({ currentKeyword, isKeywordIncluded }: KeywordDetailsProps) {
  const { addKeyword, deleteKeyword } = useMailDetailStore();

  return (
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
  );
}

export default KeywordDetails;
