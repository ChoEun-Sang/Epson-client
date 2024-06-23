"use client";

import ArticleSection from "@/components/main/ArticleSection";
import DateSection from "@/components/main/DateSection";
import RecentLetterSection from "@/components/main/RecentLetterSection";
import SendMailSelect from "@/components/main/SendMailSelect";
import useUserStore from "@/store/useUserStore";

export default function Home() {
  const { userData } = useUserStore();
  const userName = userData?.username;
  return (
    <section className="innerheight scrollon">
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
