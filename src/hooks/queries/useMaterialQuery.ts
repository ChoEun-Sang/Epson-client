import { useQuery } from "@tanstack/react-query";
import { getStudyMateiral } from "@/lib/api/api";

const useMaterialQuery = () => {
  return useQuery({
    queryKey: ["material"],
    queryFn: async () => {
      const data = await getStudyMateiral();
      return data.studyDatas;
    },
  });
};

export default useMaterialQuery;
