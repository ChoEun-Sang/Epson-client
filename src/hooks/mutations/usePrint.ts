import { postEpsonPrint } from "@/lib/api/api";
import { useMutation } from "@tanstack/react-query";

const usePrint = (key: string) =>
  useMutation({
    mutationKey: [key],
    mutationFn: (url: string) => postEpsonPrint(url),
  });

export default usePrint;
