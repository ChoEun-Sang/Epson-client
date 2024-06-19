"use client";

import usePostKeywords from "@/hooks/mutations/usePostKeywords";
import { REG_EXP } from "@/lib/constants/constants";
import { MailText } from "@/lib/types/mailDetailTypes";
import { getKeywordsInSentence } from "@/lib/util/utilFunctions";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, useState } from "react";

function MailContents({ originalText, translatedText }: MailText) {
  const { setSelectedText, setSelectedTranslatedText, keywords, setTextNumber, clearKeywords } = useMailDetailStore();
  const { mutate, isError, error, data } = usePostKeywords();
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const renderToast = () => {
      return toast.success(`학습노트에 키워드 ${data.studyData.keywords.length}개를 저장했어요.`, {
        duration: 3000,
        action: {
          label: "바로가기",
          onClick: () => console.log("스낵바 클릭"),
        },
      });
    };
    if (showToast) {
      renderToast();
      setShowToast(false);
    }
  }, [data?.studyData.keywords.length, showToast]);

  const renderStyledSentence = (sentence: string) => {
    let match;
    let lastIndex = 0;
    const styledSentence = [];

    while ((match = REG_EXP.exec(sentence)) !== null) {
      const [wordWithMark, onlyWord] = match;
      const startIndex = match.index;

      styledSentence.push(
        <span key={lastIndex} className="text-text-info">
          {sentence.substring(lastIndex, startIndex)}
        </span>
      );

      styledSentence.push(
        <span
          key={lastIndex + 1}
          className={`${keywords.includes(onlyWord) ? "text-primary-8" : "text-text-disabled"} underline font-bold`}
        >
          {onlyWord}
        </span>
      );

      lastIndex = startIndex + wordWithMark.length;
    }

    styledSentence.push(
      <span key={lastIndex} className="text-text-info">
        {sentence.substring(lastIndex)}
      </span>
    );
    return <p>{styledSentence}</p>;
  };

  const handleclickSentence = (sentence: string, index: number) => {
    setSelectedText(sentence);
    setSelectedTranslatedText(translatedText[index]);
    setTextNumber(index + 1);
    if (getKeywordsInSentence(sentence).length) {
      router.push("/maildetail/keywords");
    }
  };

  const letterId = 1; //추후 params에서 추가해야함
  const title = "임시 타이틀"; //추후 기능 추가

  if (isError) <p>오류: {error.message}</p>;

  return (
    <ul className="w-full flex flex-col overflow-auto main">
      {originalText.map((sentence, index) => (
        <li key={index} className="flex flex-col">
          <button className="flex gap-2 p-2" onClick={() => handleclickSentence(sentence, index)}>
            <span className="text-xs font-bold text-primary-3">{index + 1}</span>
            <div className="flex flex-col text-start">
              {renderStyledSentence(sentence)}
              <p className="text-sm text-text-info">{translatedText[index]}</p>
            </div>
          </button>
          {index < originalText.length - 1 && <hr className="border-b border-gray-1 my-1" />}
        </li>
      ))}
      {keywords.length ? (
        <button
          onClick={() => {
            mutate([letterId, keywords, title], {
              onSuccess: () => {
                setShowToast(true);
                clearKeywords();
              },
            });
          }}
          className="absolute bottom-8 self-center z-10 flex bg-gray-3 gap-x-3 border-2 border-gray-4 px-4 py-2 rounded-3xl"
        >
          <Image src="/book.svg" alt="" width={24} height={24} />

          <p className="text-text-info font-bold">
            키워드 <span className="text-primary-8">{keywords.length}</span>개 학습노트로 저장하기
          </p>
        </button>
      ) : null}
    </ul>
  );
}

export default MailContents;
