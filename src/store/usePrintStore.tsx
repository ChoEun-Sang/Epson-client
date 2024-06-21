import { create } from "zustand";

interface usePrintStoreProps {
  url: string;
  setURL: (URL: string) => void;
  resetURL: () => void;
}

const usePrintStore = create<usePrintStoreProps>((set) => ({
  url: "",
  setURL: (url) => set({ url }),
  resetURL: () => set({ url: "" }),
}));

export default usePrintStore;
