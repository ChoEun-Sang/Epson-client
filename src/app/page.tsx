"use client";

import Image from "next/image";
import ArticleSection from "@/components/main/ArticleSection";
import DateSection from "@/components/main/DateSection";
import RecentLetterSection from "@/components/main/RecentLetterSection";
import { MAIN_MOCKING } from "@/lib/constants/mocking";

export default function Home() {
  const test = () => {
    console.log("편지 쓰기");
  };
  return (
    <main>
      <h1>{MAIN_MOCKING.username} 님, 환영합니다!</h1>

      <ArticleSection />

      <DateSection />

      <RecentLetterSection />

      <div className="flex flex-row-reverse w-[343px] fixed z-10 bottom-24 pointer-events-none">
        <button onClick={test} className="pointer-events-auto">
          <Image src="/편지쓰기.png" width={48} height={48} alt="편지쓰기" />
        </button>
      </div>
    </main>
  );
}
