import dynamic from "next/dynamic";

const DynamicLetterComponet = dynamic(() => import("./DynamicLetterComponet"), {
  ssr: false,
});

function RecentLetterSection() {
  return (
    <section>
      <div className="h-[73px] pt-8 pb-2">
        <h2 className="font-bold">받은편지</h2>
      </div>

      <DynamicLetterComponet />
    </section>
  );
}

export default RecentLetterSection;
