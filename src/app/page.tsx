"use client";

import ArticleSection from "@/components/main/ArticleSection";
import DateSection from "@/components/main/DateSection";
import RecentLetterSection from "@/components/main/RecentLetterSection";
import SendMailSelect from "@/components/main/SendMailSelect";
import useUserStore from "@/store/useUserStore";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { userData } = useUserStore();
  const userName = userData?.username;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || userData) return;
    toast.info("Please log in to access the service!", {
      duration: 1500,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
    <section className="innerheight scrollon relative">
      <div className="h-[82px] pt-4 pb-2 title2">
        {userName ? (
          <h1>Dear {userData?.username}, only one day left until the solo concert!</h1>
        ) : (
          <>
            <h1>only one day left until the solo concert!</h1>
          </>
        )}
      </div>

      <ArticleSection />

      <DateSection />

      <RecentLetterSection />

      <SendMailSelect />
    </section>
  );
}
