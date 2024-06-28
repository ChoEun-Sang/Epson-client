import Image from "next/image";

function Logo() {
  return (
    <section className="innerheight w-[375px] flex justify-center items-center bg-secondary-1 absolute ml-[-16px]">
      <div className="flex flex-col justify-center items-center gap-[67px]">
        <div className="w-full pl-[30px] title3 text-text-info text-left flex flex-col">
          <span>손편지로 배우는</span>
          <span>서로의 마음과 언어</span>
        </div>
        <div className="w-[308px] h-24 flex-shrink-0 rounded-[50%] bg-secondary-2 flex justify-center items-center">
          <div className="text-right mb-[57px]">
            <Image src="/AIGOO.png" width={177} height={90} alt="Loading_logo" />
            <span className="title3 text-primary-8">아이고</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
