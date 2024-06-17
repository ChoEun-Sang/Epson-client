import { create } from "zustand";

interface useAuthStoreProps {
  accessToken: string;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

const useAuthStore = create<useAuthStoreProps>((set) => ({
  accessToken: "",
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: "" }),
}));

export default useAuthStore;
