import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import useUserStore from "@/store/useUserStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

import useIsOpenStore from "@/store/useIsOpenStore";
import useOutsideClick from "@/hooks/useOutsideClick";

function SendMailSelect() {
  const router = useRouter();
  const { isOpen, setIsOpen } = useIsOpenStore();
  const { userData } = useUserStore();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSendMailMethodClick = (method: string) => {
    if (userData?.id) {
      router.push(`/${method}`);
    } else {
      toast.error("로그인을 해주세요!");
    }
  };

  useOutsideClick(menuRef, () => setIsOpen(!isOpen));

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row-reverse w-[343px] sticky z-10 bottom-4 pointer-events-none">
          <button ref={buttonRef} className="pointer-events-auto">
            <div
              className={`w-12 h-12 rounded-full px-0.5 py-1 flex justify-center items-center custom-box-shadow ${
                isOpen ? "bg-background" : "bg-primary-8"
              }`}
            >
              <Image
                src={isOpen ? "/close.svg" : "/edit.svg"}
                width={24}
                height={24}
                alt={isOpen ? "편지쓰기 닫기" : "편지쓰기 열기"}
              />
            </div>
          </button>
        </div>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent ref={menuRef} className="flex justify-center w-15" align="end" side="top">
          <DropdownMenuGroup className="w-full">
            <DropdownMenuItem
              className="justify-start py-4 pt-4 pb-2 gap-2"
              onClick={() => handleSendMailMethodClick("mailupload")}
            >
              <Image src="/scanner.png" width={24} height={24} alt="스캔" />
              <span>스캔하기</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="justify-start py-4 pt-2 pb-4 gap-2"
              onClick={() => handleSendMailMethodClick("mailscan")}
            >
              <Image src="/photo_alternate.png" width={24} height={24} alt="스캔" />
              <span>이미지 불러오기</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

export default SendMailSelect;
