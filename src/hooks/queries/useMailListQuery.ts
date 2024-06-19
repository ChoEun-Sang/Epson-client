import { useQuery } from "@tanstack/react-query";
import { getReceivedMails, getSentMails } from "@/lib/api/api";

const useMailListQuery = (object: string) => {
  return useQuery({
    queryKey: ["mailList", object],
    queryFn: async () => {
      if (object === "received") {
        const data = await getReceivedMails();
        return data.receivedLetters;
      } else {
        const data = await getSentMails();
        return data.sentLetters;
      }
    },
  });
};

export default useMailListQuery;
