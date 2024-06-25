"use client";

import { useRef } from "react";
import MailList from "./MailList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollTopBtn from "../common/button/ScrollTop";
import withAuth from "@/lib/util/WithAuth";

function Mailbox() {
  const receivedRef = useRef<HTMLDivElement | null>(null);
  const sentRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (receivedRef.current) {
      receivedRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (sentRef.current) {
      sentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Tabs defaultValue="received" className="w-full innerheight relative">
      <TabsList className="w-full h-10">
        <TabsTrigger value="received">Received Letters</TabsTrigger>
        <TabsTrigger value="sent">Sent Letters</TabsTrigger>
      </TabsList>
      <div ref={sentRef || receivedRef} className="scrollon" style={{ height: "calc(100vh - 217px)" }}>
        <TabsContent value="received">
          <MailList object="received" />
        </TabsContent>
        <TabsContent value="sent">
          <MailList object="sent" />
        </TabsContent>
      </div>
      <ScrollTopBtn onClick={scrollToTop} />
    </Tabs>
  );
}

export default withAuth(Mailbox);
