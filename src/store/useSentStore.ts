import { create } from "zustand";

interface useSentStoreProps {
  sent: boolean;
  setSent: (sent: boolean) => void;
}

const useSentStore = create<useSentStoreProps>((set) => ({
  sent: false,
  setSent: (sent) => set({ sent }),
}));

export default useSentStore;
