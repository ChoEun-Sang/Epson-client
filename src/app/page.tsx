"use client";

import { useEffect } from "react";
import MainPage from "@/components/main/MainPage";
import useIsCheckedLoadingStroe from "@/store/useIsCheckedLoadingStroe";
import Logo from "./Logo";

function Main() {
  const { isCheckedLoading, setIsCheckedLoading } = useIsCheckedLoadingStroe();

  useEffect(() => {
    setIsCheckedLoading(true);

    const timer = setTimeout(() => {
      setIsCheckedLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setIsCheckedLoading]);

  return <>{isCheckedLoading ? <Logo /> : <MainPage />}</>;
}

export default Main;
