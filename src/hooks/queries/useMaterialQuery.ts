import { useQuery } from "@tanstack/react-query";
import { getStudyMateirals } from "@/lib/api/api";

const useMaterialQuery = () => {
  return useQuery({
    queryKey: ["material"],
    queryFn: async () => {
      const data = await getStudyMateirals();
      return data.studyDatas;
    },
  });
};

export default useMaterialQuery;
