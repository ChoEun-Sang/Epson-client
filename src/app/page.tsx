import ArticleSection from "@/components/main/ArticleSection";
import DateSection from "@/components/main/DateSection";
import RecentLetterSection from "@/components/main/RecentLetterSection";
import { MAIN_MOCKING } from "@/lib/constants/mocking";

export default function Home() {
  return (
    <main>
      <h1>
        {MAIN_MOCKING.username} 님, {MAIN_MOCKING.fandom}에 오신걸 환영합니다!
      </h1>

      <ArticleSection />

      <DateSection />

      <RecentLetterSection />
    </main>
  );
}
