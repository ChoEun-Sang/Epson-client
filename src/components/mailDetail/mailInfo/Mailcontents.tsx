"use client";

import usePostKeywords from "@/hooks/mutations/usePostKeywords";
import { REG_EXP } from "@/lib/constants/constants";
import { LetterDetailDocument } from "@/lib/types/mailDetailTypes";
import { getKeywordsInSentence, isEnglishSentence } from "@/lib/util/utilFunctions";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, useState } from "react";
import useFontSizeStore from "@/store/useFontSizeStore";

interface MailContentsProps {
  letterDocumentData: LetterDetailDocument | undefined;
  letterDocumentId: string;
  letterTitle?: string;
}

function MailContents({ letterDocumentData, letterDocumentId, letterTitle }: MailContentsProps) {
  const { setSelectedText, setSelectedTranslatedText, keywords, setTextNumber, clearKeywords } = useMailDetailStore();
  const { mutateAsync, isError, error, data } = usePostKeywords();
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const { size } = useFontSizeStore();

  useEffect(() => {
    const renderToast = () => {
      if (letterDocumentData && letterTitle) {
        return toast.promise(mutateAsync([letterDocumentData.letterId, keywords, letterTitle]), {
          duration: 3000,
          loading: "Saving...",
          success: (data) => {
            if (data) {
              return `Saved ${data.studyData.keywords.length}keywords in study note.`;
            }
          },
        });
      }
    };
    if (showToast) {
      renderToast();
      clearKeywords();
      setShowToast(false);
    }
  }, [
    clearKeywords,
    data?.studyData.keywords.length,
    keywords,
    letterDocumentData,
    letterTitle,
    mutateAsync,
    router,
    showToast,
  ]);

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
          className={`${keywords.includes(onlyWord) ? "text-primary-7" : "text-text-info"} font-bold`}
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

  const handleclickSentence = (sentence: string, isEnglish: boolean, index: number) => {
    setSelectedText(sentence);
    if (letterDocumentData) {
      setSelectedTranslatedText(
        isEnglish ? letterDocumentData?.pages[0].originText[index] : letterDocumentData?.pages[0].translatedText[index]
      );
    }
    setTextNumber(index + 1);
    if (getKeywordsInSentence(sentence).length) {
      router.push(`/mailbox/${letterDocumentId}/keywords/`);
    }
  };

  if (isError) <p>오류: {error.message}</p>;

  return (
    <ul className="w-full flex flex-col overflow-auto main">
      {letterDocumentData?.pages[0].originText
        ? letterDocumentData?.pages[0].originText.map((sentence, index) => {
            const isEnglish = isEnglishSentence(sentence);
            const krSentence = isEnglish
              ? letterDocumentData?.pages[0].translatedText[index]
              : letterDocumentData?.pages[0].originText[index];
            const EnSentence = isEnglish
              ? letterDocumentData?.pages[0].originText[index]
              : letterDocumentData?.pages[0].translatedText[index];
            return (
              <li key={index} className="flex flex-col">
                <button
                  className="flex gap-2 p-2"
                  onClick={() => {
                    if (isEnglish) {
                      handleclickSentence(krSentence, isEnglish, index);
                    }
                  }}
                >
                  <span className="text-xs font-bold text-primary-3">{index + 1}</span>
                  <div className="flex flex-col text-start" style={{ fontSize: size }}>
                    {renderStyledSentence(krSentence)}
                    <p className="text-text-info" style={{ fontSize: size - 2 }}>
                      {EnSentence}
                    </p>
                  </div>
                </button>
                {index < krSentence.length - 1 && <hr className="border-b border-gray-1 my-1" />}
              </li>
            );
          })
        : null}
      {keywords.length ? (
        <button
          onClick={() => {
            setShowToast(true);
          }}
          className="absolute bottom-8 self-center z-10 flex bg-gray-3 gap-x-1 border-2 border-gray-4 px-3 py-2 rounded-3xl w-[300px]"
        >
          <Image src="/book.svg" alt="" width={24} height={24} />
          <p className="text-text-info font-bold">
            <span>
              Save <span className="text-primary-8">{keywords.length}</span> keywords to study note
            </span>
          </p>
        </button>
      ) : null}
    </ul>
  );
}

export default MailContents;
