import { create } from "zustand";

interface useIsCheckedStoreProps {
  checkedItems: { [key: string]: boolean };
  setCheckedItems: (path: string) => void;
}

const useIsCheckedStore = create<useIsCheckedStoreProps>((set) => ({
  checkedItems: {},
  setCheckedItems: (path) =>
    set({
      checkedItems: { [path]: true },
    }),
}));

export default useIsCheckedStore;
