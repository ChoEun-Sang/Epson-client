import Image from "next/image";
import React from "react";

function ScrollTopBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full flex flex-row-reverse pointer-events-none sticky bottom-4">
      <button
        type="button"
        onClick={onClick}
        className="sticky right-0 h-12 w-12 flex justify-center items-center rounded-full bg-primary-8 pointer-events-auto"
      >
        <Image src="/vertical_align_top.svg" alt="scroll top button" width={24} height={24} />
      </button>
    </div>
  );
}

export default ScrollTopBtn;
