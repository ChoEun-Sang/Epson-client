"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function ScanPage() {
  return (
    <section className="innerheight flex justify-center items-center flex-col">
      <div className="w-full h-full flex justify-center items-end">
        <div className="w-60 h-60 rounded-full border-4 overflow-hidden">
          <Image src="/icon-scan.gif" width={240} height={240} alt="scan" />
        </div>
      </div>

      <div className="text-center title2 mt-8">
        <p>편지를 가이드라인에 맞추고,</p>
        <p>스캔 버튼을 눌러주세요.</p>
      </div>
      <Link href="/" className="w-full h-full flex items-end">
        <Button className="bg-primary-8 w-full h-14">눌렀어요!</Button>
      </Link>
    </section>
  );
}

export default ScanPage;
