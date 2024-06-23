"use client";

import MailDescription from "@/components/mailDetail/mailInfo/MailDescription";
import Mailcontents from "@/components/mailDetail/mailInfo/Mailcontents";
import useGetMailDetail from "@/hooks/queries/useGetMailDetail";
import { useParams } from "next/navigation";

function MailDeatil() {
  const { letterDocumentId } = useParams();
  const { data, isLoading } = useGetMailDetail(letterDocumentId as string);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <section style={{ height: "calc(100vh - 210px)" }} className="flex flex-col gap-y-6 relative overflow-hiddeen">
      <MailDescription letterImageUrl={data?.letterDocument.pages[0].url} letterInfoData={data?.letter} />
      <Mailcontents
        letterDocumentData={data?.letterDocument}
        letterDocumentId={letterDocumentId as string}
        letterTitle={data?.letter.title}
      />
    </section>
  );
}

export default MailDeatil;
