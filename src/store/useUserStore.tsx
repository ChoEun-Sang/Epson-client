import { create } from "zustand";

interface userData {
  img: string;
  id: string;
  username: string;
  myFavorite: string;
  epsonDevice: string;
}

interface useUserStoreProps {
  userData: userData;
  setUserData: (newUserData: Partial<userData>) => void;
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
  userData: {
    img: "",
    id: "",
    username: "",
    myFavorite: "",
    epsonDevice: "",
  },
  setUserData: (newUserData) =>
    set((state) => ({
      userData: { ...state.userData, ...newUserData },
    })),
  resetUserData: () => set({ userData: initialUserData }),
}));

export default useUserStore;
