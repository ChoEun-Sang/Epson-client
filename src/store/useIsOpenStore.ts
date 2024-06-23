import { create } from "zustand";

interface useIsOpenStoreProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useIsOpenStore = create<useIsOpenStoreProps>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useIsOpenStore;
