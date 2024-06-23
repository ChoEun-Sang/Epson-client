"use client";

import useUserStore from "@/store/useUserStore";
import { ReactNode, useEffect, useState } from "react";
import { authUser, getUserData } from "@/lib/api/api";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState(false);
  const { userData, setUserData } = useUserStore();

  useEffect(() => {
    const initialize = async () => {
      if (!userData) {
        return setInit(true);
      }
      try {
        await authUser();
        const { img, id, username, myFavorite, epsonDevice } = await getUserData();
        setUserData({
          img,
          id,
          username,
          myFavorite,
          epsonDevice,
        });
        setInit(true);
      } catch (error) {
        setInit(false);
        console.error("Failed to authenticate user or fetch data:", error);
      }
    };

    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUserData]);

  if (!init) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
