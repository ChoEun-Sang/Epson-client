"use client";

import useMailDetailStore from "@/store/useMailDetailStore";
import { UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

interface KeywordDetailsProps {
  currentKeyword: string;
  isKeywordIncluded: boolean;
  gptData: UseQueryResult<string>;
}

function KeywordDetails({ currentKeyword, isKeywordIncluded, gptData }: KeywordDetailsProps) {
  const { addKeyword, deleteKeyword } = useMailDetailStore();
  const { data, isLoading, isError, error } = gptData;

  const cleanJsonString = (jsonString: string) => {
    return jsonString.replace(/```json|```|`/g, "").trim();
  };

  const parsedData = data ? JSON.parse(cleanJsonString(data)) : null;

  if (isError) return <p>오류: {error.message}</p>;

  return (
    <div className="flex flex-col gap-y-2 mb-6">
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
          {isLoading ? (
            <Skeleton className="h-4 w-[150px]" />
          ) : (
            <span className="text-sm font-semibold text-text-disabled">[{parsedData.translated}]</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {isLoading ? (
          <>
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-4 w-full pl-2" />
            <Skeleton className="h-4 w-full pl-2" />
            <Skeleton className="h-4 w-full pl-2" />
            <Skeleton className="h-4 w-full pl-2" />
          </>
        ) : (
          <>
            <p className="font-medium text-text-info">{parsedData.definition}</p>
            <p className="font-medium text-text-info border-l-2 border-gray-3 pl-2">{parsedData.krexample}</p>
            <p className="font-medium text-text-info border-l-2 border-gray-3 pl-2">{parsedData.enexample}</p>
            <ul className="flex gap-x-1.5 border-l-2 border-gray-3 flex-wrap pl-2">
              <Image src="/equal.svg" alt="" width={24} height={24} />
              {data &&
                JSON.parse(data).synonyms.map((synonym: string, index: number) => (
                  <span className="font-medium text-text-info" key={index}>
                    {synonym}
                  </span>
                ))}
            </ul>
            <ul className="flex gap-x-1.5 border-l-2 border-gray-3 flex-wrap pl-2">
              <Image src="/width.svg" alt="" width={24} height={24} />
              {data &&
                JSON.parse(data).antonyms.map((antonym: string, index: number) => (
                  <span className="font-medium text-text-info" key={index}>
                    {antonym}
                  </span>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default KeywordDetails;
