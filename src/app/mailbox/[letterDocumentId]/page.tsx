"use client";

import MailDescription from "@/components/mailDetail/MailDescription";
import Mailcontents from "@/components/mailDetail/Mailcontents";
import useGetMailDetail from "@/hooks/queries/useGetMailDetail";
import { useParams } from "next/navigation";

function MailDeatil() {
  const { letterDocumentId } = useParams();
  const { data, isLoading } = useGetMailDetail(letterDocumentId as string);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <section className="flex flex-col gap-y-6 relative innerheight">
      <MailDescription letterImageUrl={data?.letterDocument.pages[0].url} letterInfoData={data?.letter} />
      <Mailcontents letterDocumentData={data?.letterDocument} letterDocumentId={letterDocumentId as string} />
    </section>
  );
}

export default MailDeatil;
