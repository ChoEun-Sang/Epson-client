import useGetMailDetail from "@/hooks/queries/useGetMailDetail";
import Image from "next/image";
import { MailItem } from "./DynamicLetterComponet";
import { IMAGE_BASE_URL } from "@/lib/constants/constants";

function LetterImage({ item, letterDocumentId }: { item: MailItem; letterDocumentId: string | null }) {
  const { data: mailDetailData } = useGetMailDetail(letterDocumentId);

  let imageUrl;

  if (mailDetailData?.letterDocument) {
    imageUrl = IMAGE_BASE_URL + mailDetailData?.letterDocument.pages[0].url;
  }

  return (
    <>
      <div className="border-2 rounded-lg w-[168px] h-[90px] overflow-hidden flex justify-center items-center">
        <Image src={imageUrl || "/cover.jpg"} width={168} height={90} alt={`편지 ${item.title}`} className="p-1" />
      </div>
      <h3 className="text-center body2 text-text-info">{item.title}</h3>
    </>
  );
}

export default LetterImage;
