"use client";

import Image from "next/image";
import { MAIN_MOCKING } from "@/lib/constants/mocking";

function DynamicLetterComponet() {
  return (
    <div className="flex justify-center gap-2">
      {MAIN_MOCKING.recently.map((item, index) => (
        <div key={`${item.title}-${index}`} className="flex flex-col gap-2">
          <div className="border-2 rounded-lg w-[168px] h-[90px]">
            <Image src={item.latter} width={168} height={90} alt={`편지 ${item.title}`} />
          </div>
          <h3 className="text-center">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
``;

export default DynamicLetterComponet;
