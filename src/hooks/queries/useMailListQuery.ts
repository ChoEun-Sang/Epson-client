import { useQuery } from "@tanstack/react-query";
import { getReceivedMails, getSentMails } from "@/lib/api/api";
import useUserStore from "@/store/useUserStore";

const useMailListQuery = (object: string) => {
  const { userData } = useUserStore();
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
    enabled: !!userData,
  });
};

export default useMailListQuery;
