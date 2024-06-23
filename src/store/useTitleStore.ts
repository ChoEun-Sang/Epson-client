import { create } from "zustand";

interface useTitleStoreProps {
  title: string;
  setTitle: (title: string) => void;
}

const useTitleStore = create<useTitleStoreProps>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
}));

export default useTitleStore;
