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
        <div className="w-60 h-60 rounded-full border-4 overflow-hidden flex justify-center items-center">
          <Image src="/guide_line.png" width={193} height={197} alt="scan" />
        </div>
        <div className="text-center title2 mt-8">
          <p>Align the letter with the guidelines,</p>
          <p>press the &quot;scan&quot; button.</p>
        </div>
      </div>
      <div className="w-full flex items-end mb-4" onClick={onScanClick}>
        <Button className="bg-primary-8 w-full h-14 body1">Pressed!</Button>
      </div>
    </section>
  );
}

export default ScanGuideLine;
