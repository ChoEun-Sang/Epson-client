"use client";
import Image from "next/image";

function MaterialPDF({ url }: { url: string }) {
  const onClickToPrint = () => {
    console.log("onClickToPrint");
  };

  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center gap-4 innerheight scrollon">
      <button
        type="button"
        onClick={onClickToPrint}
        className="px-4 py-2 flex justify-center items-center gap-2 rounded-full border border-gray-8"
      >
        <Image src={"/printer.svg"} alt="printer" width={24} height={24} />
        학습자료 인쇄하기
      </button>
      <div className="relative w-full h-full">
        <iframe
          src={url}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </section>
  );
}

export default MaterialPDF;
