"use client";

import { useRef } from "react";
import MailList from "./MailList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollTopBtn from "../common/button/ScrollTop";

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
    <Tabs defaultValue="received" ref={sentRef} className="w-full relative innerheight scrollon">
      <TabsList className="w-full h-10 sticky top-0">
        <TabsTrigger value="received">Received Letters</TabsTrigger>
        <TabsTrigger value="sent">Sent Letters</TabsTrigger>
      </TabsList>
      <TabsContent ref={receivedRef} value="received" className="h-full">
        <MailList object="received" />
      </TabsContent>
      <TabsContent value="sent" className="h-full ">
        <MailList object="sent" />
      </TabsContent>
      <ScrollTopBtn onClick={scrollToTop} />
    </Tabs>
  );
}

export default Mailbox;
