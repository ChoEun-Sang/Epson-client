"use client";

import AddedKeywordsList from "@/components/mailDetail/AddedKeywordsList";
import KeywordDetails from "@/components/mailDetail/KeywordDetails";
import KeywordSlider from "@/components/mailDetail/KeywordSlider";
import useGetGPTDataQueries from "@/hooks/queries/useGetGPTDataQuery";
import { getKeywordsInSentence } from "@/lib/util/utilFunctions";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SelectKeywords() {
  const router = useRouter();
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState<number>(0);
  const { selectedText, keywords } = useMailDetailStore();
  const keywordsInSentence = getKeywordsInSentence(selectedText);
  const currentKeyword = keywordsInSentence[currentKeywordIndex];
  const isKeywordIncluded = keywords.includes(currentKeyword);
  const queries = useGetGPTDataQueries(keywordsInSentence);
  const { letterDocumentId } = useParams();

  useEffect(() => {
    if (!selectedText) {
      router.replace(`/mailbox/${letterDocumentId}`);
    }
  }, [selectedText, router, letterDocumentId]);

  return (
    <section className="flex flex-col gap-y-3 innerheight">
      <KeywordSlider currentKeywordIndex={currentKeywordIndex} setCurrentKeywordIndex={setCurrentKeywordIndex} />
      <div className="gap-y-3 flex flex-col scrollon">
        <KeywordDetails
          currentKeyword={currentKeyword}
          isKeywordIncluded={isKeywordIncluded}
          gptData={queries[currentKeywordIndex]}
        />
        <AddedKeywordsList />
      </div>
    </section>
  );
}

export default SelectKeywords;
