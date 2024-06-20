import { getLetterDetail } from "@/lib/api/api";
import { LetterDetailData } from "@/lib/types/mailDetailTypes";
import { useQuery } from "@tanstack/react-query";

const useGetMailDetail = (letterDocumentId: string) =>
  useQuery<LetterDetailData>({
    queryKey: ["letterDocument", letterDocumentId],
    queryFn: () => getLetterDetail(letterDocumentId),
  });

export default useGetMailDetail;
