import { create } from "zustand";

interface useFontSizeStoreProps {
  size: number;
  setSize: (size: number) => void;
}

const useFontSizeStore = create<useFontSizeStoreProps>((set) => ({
  size: 16,
  setSize: (size) => set({ size }),
}));

export default useFontSizeStore;
