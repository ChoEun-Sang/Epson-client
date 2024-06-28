"use client";

import useIsCheckedLoadingStroe from "@/store/useIsCheckedLoadingStroe";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

function Redirect() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);
  const { setIsCheckedLoading } = useIsCheckedLoadingStroe();

  useEffect(() => {
    setIsCheckedLoading(true);
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const timer = setTimeout(() => {
      setIsCheckedLoading(false);
      router.replace("/");
    }, 3000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [router, setIsCheckedLoading]);

  return (
    <section className="innerheight w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="/AIGOO.png" width={177} height={90} alt="Loading_logo" />
        <span className="title1">Invalid page access.</span>
        <div className="mt-2 body2 text-text-info">
          You will be redirected in <span className="text-primary-8">{seconds}</span> seconds.
        </div>
      </div>
    </section>
  );
}

export default Redirect;
