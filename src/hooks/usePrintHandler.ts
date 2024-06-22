import usePrint from "./mutations/usePrint";
import usePrintStateStore from "@/store/usePrintStateStore";

const usePrintHandler = (url: string) => {
  const { mutate, isPending, isSuccess, isError } = usePrint(url);
  const { setPrint } = usePrintStateStore();

  const handlePrint = (url: string) => {
    mutate(url);
    setPrint(true);
  };

  return { isPending, isSuccess, isError, handlePrint };
};

export default usePrintHandler;
