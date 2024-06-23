import Image from "next/image";
import React from "react";

function ScrollTopBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute bottom-1 right-0 h-12 w-12 flex justify-center items-center rounded-full bg-primary-8"
    >
      <Image src="/vertical_align_top.svg" alt="scroll top button" width={24} height={24} />
    </button>
  );
}

export default ScrollTopBtn;
