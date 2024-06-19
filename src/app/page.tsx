"use client";

import Image from "next/image";
import ArticleSection from "@/components/main/ArticleSection";
import DateSection from "@/components/main/DateSection";
import RecentLetterSection from "@/components/main/RecentLetterSection";
import { MAIN_MOCKING } from "@/lib/constants/mocking";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore";

export default function Home() {
  const router = useRouter();

  const { userData } = useUserStore();

  const handleSendMailClick = () => {
    if (userData?.id) {
      router.push("/sendmail");
    } else alert("로그인을 해주세요.");
  };

  return (
    <main className="h-[634px] overflow-x-hidden overflow-auto main">
      <div className="h-[82px] pt-4 pb-2">
        <h1>{MAIN_MOCKING.username} 님, 환영합니다!</h1>
      </div>

      <ArticleSection />

      <DateSection />

      <RecentLetterSection />

      <div className="flex flex-row-reverse w-[343px] sticky z-10 bottom-4 pointer-events-none">
        <button onClick={handleSendMailClick} className="pointer-events-auto">
          <Image src="/편지쓰기.png" width={48} height={48} alt="편지쓰기" />
        </button>
      </div>
    </main>
  );
}
