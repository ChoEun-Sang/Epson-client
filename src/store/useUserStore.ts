import { create } from "zustand";

interface userData {
  img: string;
  id: string;
  username: string;
  myFavorite: string;
  epsonDevice: string;
}

interface useUserStoreProps {
  userData: userData | null;
  setUserData: (userData: userData | null) => void;
  resetUserData: () => void;
}

const initialUserData = {
  img: "",
  id: "",
  username: "",
  myFavorite: "",
  epsonDevice: "",
};

const useUserStore = create<useUserStoreProps>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
  resetUserData: () => set({ userData: initialUserData }),
}));

export default useUserStore;
