"use client";

import ArticleSection from "@/components/main/ArticleSection";
import DateSection from "@/components/main/DateSection";
import RecentLetterSection from "@/components/main/RecentLetterSection";
import { MAIN_MOCKING } from "@/lib/constants/mocking";
import SendMailSelect from "@/components/main/SendMailSelect";

export default function Home() {
  return (
    <section className="innerheight scrollon">
      <div className="h-[82px] pt-4 pb-2">
        <h1>{MAIN_MOCKING.username} 님, 환영합니다!</h1>
      </div>

      <ArticleSection />

      <DateSection />

      <RecentLetterSection />

      <SendMailSelect />
    </section>
  );
}
