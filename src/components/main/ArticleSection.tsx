import Image from "next/image";
import Link from "next/link";
import { MAIN_MOCKING } from "@/lib/constants/mocking";

function ArticleSection() {
  return (
    <article className="flex w-full h-full">
      <aside className="w-40 h-40">
        <Image src={MAIN_MOCKING.img} alt={`${MAIN_MOCKING.fandom} 메인 이미지`} width={160} height={160} />
      </aside>

      <div className="flex flex-col gap-4 space-y-2">
        <h2 className="font-bold"> 최신 기사</h2>
        {MAIN_MOCKING.news.map((item) =>
          Object.values(item).map((newsItem, newsIndex) => (
            <Link href="#" key={newsIndex} className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40">
              {newsItem}
            </Link>
          ))
        )}
      </div>
    </article>
  );
}

export default ArticleSection;
