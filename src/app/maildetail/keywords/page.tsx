"use client";

import AddedKeywordsList from "@/components/mailDetail/AddedKeywordsList";
import KeywordDetails from "@/components/mailDetail/KeywordDetails";
import KeywordSlider from "@/components/mailDetail/KeywordSlider";
import { getKeywordsInSentence } from "@/lib/util/utilFunctions";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SelectKeywords() {
  const router = useRouter();
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState<number>(0);
  const { selectedText, keywords } = useMailDetailStore();
  const keywordsInSentence = getKeywordsInSentence(selectedText);
  const currentKeyword = keywordsInSentence[currentKeywordIndex];
  const isKeywordIncluded = keywords.includes(currentKeyword);

  // 추후 letterId로 동적 라우팅 처리
  if (!selectedText) {
    router.push("/maildetail/");
  }

  return (
    <section className="flex flex-col gap-y-3">
      <KeywordSlider currentKeywordIndex={currentKeywordIndex} setCurrentKeywordIndex={setCurrentKeywordIndex} />
      <KeywordDetails currentKeyword={currentKeyword} isKeywordIncluded={isKeywordIncluded} />
      <AddedKeywordsList />
    </section>
  );
}

export default SelectKeywords;
