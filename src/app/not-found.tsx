"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Redirect() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const timer = setTimeout(() => {
      router.replace("/");
    }, 3000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <section className="innerheight w-full flex justify-center items-center">
      <div className="text-center">
        <span className="title1">Invalid page access.</span>
        <div className="mt-2 body2 text-text-info">
          You will be redirected in <span className="text-primary-8">{seconds}</span> seconds.
        </div>
      </div>
    </section>
  );
}

export default Redirect;
