import dynamic from "next/dynamic";

const DynamicLetterComponet = dynamic(() => import("./DynamicLetterComponet"), {
  ssr: false,
});

function RecentLetterSection() {
  return (
    <section>
      <h2 className="font-bold">최근 편지</h2>

      <DynamicLetterComponet />
    </section>
  );
}

export default RecentLetterSection;
