"use client";

import { getKeywordsInSentence } from "@/lib/util/utilFunctions";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useRouter } from "next/navigation";

function SelectKeywords() {
  const router = useRouter();
  const { selectedText, selectedTranslatedText } = useMailDetailStore();
  const keywordsInSentence = getKeywordsInSentence(selectedText);
  console.log(keywordsInSentence);
  // 추후 letterId로 동적 라우팅 처리
  if (!selectedText) {
    router.push("/maildetail/");
  }

  return (
    <div>
      {selectedText} {selectedTranslatedText}
    </div>
  );
}

export default SelectKeywords;
