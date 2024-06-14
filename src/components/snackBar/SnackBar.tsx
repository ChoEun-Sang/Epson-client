"use client";

import { toast } from "sonner";
import Image from "next/image";

interface SnackBar {
  keywordsLength: number;
}

// 추후 버튼 스타일링, 액션버튼 클릭시 라우터 이동 처리
function SnackBar({ keywordsLength = 0 }: SnackBar) {
  return (
    <button
      onClick={() =>
        toast.success(`노트에 단어 ${keywordsLength}개를 저장했어요.`, {
          duration: 3000,
          icon: <Image src="/success_badge.svg" alt="" width={24} height={24} />,
          position: "bottom-center",
          unstyled: true,
          classNames: {
            toast: "bg-black flex px-4 w-[343px] h-[48px] items-center rounded-lg",
            description: "text-sm text-primary-foreground",
            title: "text-sm text-primary-foreground",
            actionButton: "text-sm text-[#F89A97] font-bold",
            icon: "w-6 h-6 mr-3",
          },
          action: {
            label: "바로가기",
            onClick: () => console.log("스낵바 클릭"),
          },
        })
      }
    >
      스낵바 버튼
    </button>
  );
}

export default SnackBar;
