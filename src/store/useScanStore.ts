import { create } from "zustand";

interface useScanStoreProps {
  scanned: boolean;
  setScanned: (scanned: boolean) => void;
}

const useScanStore = create<useScanStoreProps>((set) => ({
  scanned: false,
  setScanned: (scanned) => set({ scanned }),
}));

export default useScanStore;
