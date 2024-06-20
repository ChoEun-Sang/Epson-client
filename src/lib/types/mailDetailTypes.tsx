export interface MailDetailData {
  title: string;
  letterImageUrl: string;
  createdAt: string;
  sender: string;
}

export interface MailText {
  originalText: string[];
  translatedText: string[];
}

export interface LetterDetailInfo {
  id: string;
  title: "string";
  letterDocumentId: "string";
  createdAt: "string";
  sender: {
    id: 0;
    username: "string";
    img: unknown;
    role: "string";
    createdAt: "string";
  };
  receiver: {
    id: 0;
    username: "string";
    img: unknown;
    role: "string";
    createdAt: "string";
  };
}

export interface LetterDetailDocument {
  _id: "string";
  pages: [
    {
      type: "string";
      url: "string";
      originText: string[];
      translatedText: string[];
    }
  ];
  letterId: 0;
}

export interface GPTData {
  keyword: string;
  translated: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
  enexample: string;
  krexample: string;
}

export interface LetterDetailData {
  letter: LetterDetailInfo;
  letterDocument: LetterDetailDocument;
}
