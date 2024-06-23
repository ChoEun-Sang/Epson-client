import { MailItem } from "@/components/main/DynamicLetterComponet";
import { create } from "zustand";

interface useRecentLettersStoreProps {
  recentLetters: MailItem[];
  setRecentLetters: (letters: MailItem[]) => void;
}

const useRecentLettersStore = create<useRecentLettersStoreProps>((set) => ({
  recentLetters: [],
  setRecentLetters: (letters) => set({ recentLetters: letters }),
}));

export default useRecentLettersStore;
