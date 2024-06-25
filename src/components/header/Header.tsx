"use client";

import useIsCheckedLoadingStroe from "@/store/useIsCheckedLoadingStroe";
import RenderHeader from "./RenderHeader";

function Header() {
  const { isCheckedLoading } = useIsCheckedLoadingStroe();

  if (isCheckedLoading) return;
  return (
    <header className="flex items-end w-[343px] h-[98px] bg-background py-2 sticky top-0 shrink-0 z-20">
      <RenderHeader />
    </header>
  );
}

export default Header;
