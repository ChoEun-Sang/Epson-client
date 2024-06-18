import MailList from "./MailList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Mailbox() {
  return (
    <Tabs defaultValue="recived" className="w-full">
      <TabsList className="w-full h-10 ">
        <TabsTrigger value="recived">받은 편지</TabsTrigger>
        <TabsTrigger value="sent">보낸 편지</TabsTrigger>
      </TabsList>
      <TabsContent value="recived">
        <MailList object="received" />
      </TabsContent>
      <TabsContent value="sent">
        <MailList object="sent" />
      </TabsContent>
    </Tabs>
  );
}

export default Mailbox;
