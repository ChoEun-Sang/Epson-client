import { useQuery } from "@tanstack/react-query";
import { getRecivedMails, getSentMails } from "@/lib/api/api";

const useMailListQuery = (object: string) => {
  return useQuery({
    queryKey: ["mailList", object],
    queryFn: async () => {
      if (object === "received") {
        const data = await getRecivedMails();
        return data;
      } else {
        const data = await getSentMails();
        return data;
      }
    },
  });
};

export default useMailListQuery;
