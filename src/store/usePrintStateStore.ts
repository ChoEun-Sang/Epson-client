import { create } from "zustand";

interface usePrintStateStoreProps {
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  print: boolean;
  setPrint: (state: boolean) => void;
  setState: (stateName: string, state: boolean) => void;
}

const usePrintStateStore = create<usePrintStateStoreProps>((set) => ({
  isPending: true,
  isError: false,
  isSuccess: false,
  print: false,
  setPrint: (state) => set({ print: state }),
  setState: (stateName, state) => set((prev) => ({ ...prev, [stateName]: state })),
}));

export default usePrintStateStore;
