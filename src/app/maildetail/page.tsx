"use client";

import MailDescription from "@/components/mailDetail/MailDescription";
import Mailcontents from "@/components/mailDetail/Mailcontents";
import { MAIL_MOCKING } from "@/lib/constants/mocking";

function MailDeatil() {
  const { title, letterImageUrl, createdAt, sender, originalText, translatedText } = MAIL_MOCKING;
  const mailDescriptionData = { title, letterImageUrl, createdAt, sender };
  const mailContentsData = { originalText, translatedText };
  return (
    <section className="flex flex-col gap-y-6 h-full relative">
      <MailDescription {...mailDescriptionData} />
      <Mailcontents {...mailContentsData} />
    </section>
  );
}

export default MailDeatil;
