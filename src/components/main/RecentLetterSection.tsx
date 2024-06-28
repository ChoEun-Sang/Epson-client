import useUserStore from "@/store/useUserStore";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const DynamicLetterComponet = dynamic(() => import("./DynamicLetterComponet"), {
  ssr: false,
});

function RecentLetterSection() {
  const router = useRouter();
  const { userData } = useUserStore();

  const handleClickMailBox = () => {
    router.push("/mailbox");
  };

  return (
    <section>
      <div className="h-[73px] pt-8 pb-2 flex justify-between">
        <h2 className="title2">Received Letters</h2>
        {userData && (
          <div
            className="callout2 text-text-info flex items-end cursor-pointer hover:border-b-2 border-b-text-info"
            onClick={handleClickMailBox}
          >
            View All
          </div>
        )}
      </div>

      <DynamicLetterComponet />
    </section>
  );
}

export default RecentLetterSection;
