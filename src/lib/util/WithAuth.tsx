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
      const checkAuth = () => {
        if (!userData) {
          setIsCheckedLoading(true);

          const timer = setTimeout(() => {
            setIsCheckedLoading(false);

            router.replace("/");
          }, 3000);

          return () => clearTimeout(timer);
        } else {
          setIsCheckedLoading(false);
        }
      };

      checkAuth();
    }, [router, userData, setIsCheckedLoading]);

    if (!userData) {
      return <RedirectPage />;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default WithAuth;
