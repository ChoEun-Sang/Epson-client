"use client";

import useUserStore from "@/store/useUserStore";
import { ReactNode, useEffect, useState } from "react";
import { authUser, getUserData } from "@/lib/api/api";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState(false);
  const { userData, setUserData } = useUserStore();

  useEffect(() => {
    const getAuthUser = async () => {
      if (!userData) return;
      try {
        await authUser();
        setInit(true);
      } catch (error) {
        setInit(false);
        console.error(error);
      }
    };

    const getData = async () => {
      if (!userData) {
        try {
          const data = await getUserData();
          setUserData({
            img: data.img,
            id: data.id,
            username: data.username,
            myFavorite: data.myFavorite,
            epsonDevice: data.epsonDevice,
          });
        } catch (err) {
          console.error("사용자 정보 확인에 실패:", err);
        } finally {
          setInit(true);
        }
      } else {
        setInit(true);
      }
    };

    getData();
    getAuthUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUserData, userData]);

  if (!init) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
