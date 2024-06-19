import { postKeywords } from "@/lib/api/api";
import { useMutation } from "@tanstack/react-query";

const usePostKeywords = () =>
  useMutation({
    mutationFn: (keywordsData: [letterId: number, keywords: string[], title: string]) => postKeywords(...keywordsData),
  });

export default usePostKeywords;
