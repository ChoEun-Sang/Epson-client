"use client";

import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, ComponentType } from "react";

import RedirectPage from "@/components/RedirectPage";
import useIsCheckedLoadingStroe from "@/store/useIsCheckedLoadingStroe";

const WithAuth = <P extends object>(Component: ComponentType<P>): FunctionComponent<P> => {
  const WrappedComponent: FunctionComponent<P> = (props) => {
    const router = useRouter();
    const { userData } = useUserStore();
    const { setIsCheckedLoading } = useIsCheckedLoadingStroe();

    useEffect(() => {
      setIsCheckedLoading(true);
      if (!userData) {
        const timeout = setTimeout(() => {
          setIsCheckedLoading(false);
          router.replace("/");
        }, 3000);

        return () => clearTimeout(timeout);
      }
    }, [router, setIsCheckedLoading, userData]);

    if (!userData) {
      return <RedirectPage />;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default WithAuth;
