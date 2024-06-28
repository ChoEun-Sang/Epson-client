"use client";

import Image from "next/image";

function RedirectPage() {
  return (
    <section className="innerheight flex justify-center items-center flex-col">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* <div className="w-60 h-60 rounded-full border-4 overflow-hidden"> */}
        <Image src="/AIGOO.png" width={177} height={90} alt="loading" />
        {/*  </div> */}
        <div className="text-center title2 mt-8">
          <p className="body3 text-text-info">Log-in is required to use this service!</p>
        </div>
      </div>
    </section>
  );
}

export default RedirectPage;
