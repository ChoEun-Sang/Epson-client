import { getAITranslate } from "@/lib/api/api";
import { useQueries } from "@tanstack/react-query";

const useGetGPTDataQueries = (keywords: string[]) => {
  return useQueries({
    queries: keywords.map((keyword) => {
      return {
        queryKey: ["GPTData", keyword],
        queryFn: () => getAITranslate(keyword),
      };
    }),
  });
};

export default useGetGPTDataQueries;
