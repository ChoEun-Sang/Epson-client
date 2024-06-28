"use client";

import { useEffect } from "react";
import MainPage from "@/components/main/MainPage";
import useIsCheckedLoadingStroe from "@/store/useIsCheckedLoadingStroe";
import Logo from "./Logo";

function Main() {
  const { isCheckedLoading, setIsCheckedLoading } = useIsCheckedLoadingStroe();

  useEffect(() => {
    const firstVisit = sessionStorage.getItem("firstVisit");

    if (!firstVisit) {
      setIsCheckedLoading(true);

      const timer = setTimeout(() => {
        setIsCheckedLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsCheckedLoading(false);
    }
  }, [setIsCheckedLoading]);

  return <>{isCheckedLoading ? <Logo /> : <MainPage />}</>;
}

export default Main;
