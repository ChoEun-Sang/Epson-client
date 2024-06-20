import Image from "next/image";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore";
/* import {  } from "lucide-react"; */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

function SendMailSelect() {
  const router = useRouter();

  const { userData } = useUserStore();

  const handleSendMailMethodClick = (method: string) => {
    if (userData?.id) {
      router.push(`/${method}`);
    } else toast.error("로그인을 해주세요!");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row-reverse w-[343px] sticky z-10 bottom-4 pointer-events-none">
          <button className="pointer-events-auto">
            <Image src="/편지쓰기.png" width={48} height={48} alt="편지쓰기" />
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex justify-center w-15" align="end" side="top">
        <DropdownMenuGroup className="w-full">
          <DropdownMenuItem onClick={() => handleSendMailMethodClick("mailupload")}>
            <span>업로드</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSendMailMethodClick("mailscan")}>
            <span>스캔</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SendMailSelect;
