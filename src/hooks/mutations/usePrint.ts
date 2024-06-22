import { postEpsonPrint } from "@/lib/api/api";
import { useMutation } from "@tanstack/react-query";

const usePrint = () =>
  useMutation({
    mutationFn: (url: string) => postEpsonPrint(url),
  });

export default usePrint;
