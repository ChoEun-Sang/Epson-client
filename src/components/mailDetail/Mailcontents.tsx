"use client";

import { MailText } from "@/lib/types/mailDetailTypes";
import useMailDetailStore from "@/store/useMailDetailStore";
import { useRouter } from "next/navigation";

function MailContents({ originalText, translatedText }: MailText) {
  const { setSelectedText, setSelectedTranslatedText } = useMailDetailStore();
  const router = useRouter();
  const renderStyledSentence = (sentence: string) => {
    const regex = /\(([^)]+)\)/g;
    let match;
    let lastIndex = 0;
    const styledSentence = [];

    while ((match = regex.exec(sentence)) !== null) {
      const [wordWithMark, onlyWord] = match;
      const startIndex = match.index;

      styledSentence.push(
        <span key={lastIndex} className="text-text-info">
          {sentence.substring(lastIndex, startIndex)}
        </span>
      );

      styledSentence.push(
        <span key={lastIndex + 1} className="text-primary-8 font-bold">
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
    router.push("/maildetail/keywords");
  };

  return (
    <div className="w-full flex flex-col">
      {originalText.map((sentence, index) => (
        <div key={index} className="flex flex-col">
          <button className="flex gap-2 p-2" onClick={() => handleclickSentence(sentence, index)}>
            <span className="text-xs font-bold text-primary-3">{index + 1}</span>
            <div className="flex flex-col text-start">
              {renderStyledSentence(sentence)}
              <p className="text-sm text-text-info">{translatedText[index]}</p>
            </div>
          </button>
          {index < originalText.length - 1 && <hr className="border-b border-gray-1 my-1" />}
        </div>
      ))}
    </div>
  );
}

export default MailContents;
