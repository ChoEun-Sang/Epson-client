"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ScanGuideLineProps {
  onScanClick: () => void;
}

function ScanGuideLine({ onScanClick }: ScanGuideLineProps) {
  return (
    <section className="innerheight flex justify-center items-center flex-col">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-60 h-60 rounded-full border-4 overflow-hidden">
          <Image src="/icon-scan.gif" width={240} height={240} alt="scan" />
        </div>
        <div className="text-center title2 mt-8">
          <p>편지를 가이드라인에 맞추고,</p>
          <p>스캔 버튼을 눌러주세요.</p>
        </div>
      </div>
      <div className="w-full flex items-end" onClick={onScanClick}>
        <Button className="bg-primary-8 w-full h-14 body1">눌렀어요!</Button>
      </div>
    </section>
  );
}

export default ScanGuideLine;
