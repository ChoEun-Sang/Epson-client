import useMaterialQuery from "@/hooks/queries/useMaterialQuery";
import React, { useRef } from "react";
import Material from "./Material";
import Image from "next/image";
import ScrollTopBtn from "../common/button/ScrollTop";

interface MaterialProps {
  id: number;
  keywords: string[];
  title: string;
  url: string;
  createdAt: string;
}

function Materials() {
  const receivedRef = useRef<HTMLDivElement | null>(null);

  const { data } = useMaterialQuery();

  const scrollToTop = () => {
    if (receivedRef.current) {
      receivedRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full h-full relative">
      <div className="relative w-full h-10 my-4">
        <input
          type="text"
          placeholder="Enter search term"
          className="relative px-4 w-full h-full border-2 border-gray-2 placeholder-text-disabled rounded-md "
        />
        <Image src="/search_check_2.svg" alt="search icon" width={24} height={24} className="absolute right-4 top-2" />
      </div>
      <div ref={receivedRef} className="scrollon h-full overflow-auto">
        {data && (
          <ul>
            {data.map((value: MaterialProps, idx: number) => (
              <Material key={value.id} data={value} idx={idx} />
            ))}
          </ul>
        )}
      </div>
      <ScrollTopBtn onClick={scrollToTop} />
    </section>
  );
}

export default Materials;
