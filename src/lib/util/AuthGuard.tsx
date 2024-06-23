"use client";

import useUserStore from "@/store/useUserStore";
import { ReactNode, useEffect, useState } from "react";
import { authUser, getUserData } from "@/lib/api/api";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState(false);
  const { setUserData } = useUserStore();

  useEffect(() => {
    const getAuthUser = async () => {
      try {
        await authUser();
        setInit(true);
      } catch (error) {
        setInit(false);
        console.error(error);
      }
    };

    const getData = async () => {
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
    };

    getData();
    getAuthUser();
  }, [setUserData]);

  if (!init) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
