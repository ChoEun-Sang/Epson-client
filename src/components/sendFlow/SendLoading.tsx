"use client";

import Image from "next/image";

function SendLoading() {
  return (
    <section className="innerheight flex justify-center items-center flex-col">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-60 h-60 rounded-full border-4 overflow-hidden">
          <Image src="/send_loading.gif" width={240} height={240} alt="loading" />
        </div>
        <div className="text-center title2 mt-8">
          <p>편지 보내는 중</p>
        </div>
      </div>
    </section>
  );
}

export default SendLoading;
