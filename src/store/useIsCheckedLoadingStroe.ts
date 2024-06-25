import { create } from "zustand";

interface useIsCheckedLoadingStroeProps {
  isCheckedLoading: boolean;
  setIsCheckedLoading: (isCheckedLoading: boolean) => void;
}

const useIsCheckedLoadingStroe = create<useIsCheckedLoadingStroeProps>((set) => ({
  isCheckedLoading: false,
  setIsCheckedLoading: (isCheckedLoading) => set({ isCheckedLoading }),
}));

export default useIsCheckedLoadingStroe;
