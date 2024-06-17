import { create } from "zustand";

interface useMailDetailStore {
  selectedText: string;
  selectedTranslatedText: string;
  keywords: string[];
  setSelectedText: (text: string) => void;
  setSelectedTranslatedText: (text: string) => void;
  addKeyword: (keyword: string) => void;
  deleteKeyword: (keyword: string) => void;
}

const useMailDetailStore = create<useMailDetailStore>((set) => ({
  selectedText: "",
  selectedTranslatedText: "",
  keywords: [],
  setSelectedText: (text) => set({ selectedText: text }),
  setSelectedTranslatedText: (text) => set({ selectedTranslatedText: text }),
  addKeyword: (keyword) => set((state) => ({ keywords: [...state.keywords, keyword] })),
  deleteKeyword: (keyword) => set((state) => ({ keywords: state.keywords.filter((word) => word !== keyword) })),
}));

export default useMailDetailStore;
