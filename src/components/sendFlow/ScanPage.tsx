"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useScanStore from "@/store/useScanStore";
import SendLoading from "@/components/sendFlow/SendLoading";
import ScanGuideLine from "@/components/sendFlow/ScanGuideLine";
import WithAuth from "@/lib/util/WithAuth";

function ScanPage() {
  const { scanned, setScanned } = useScanStore();
  const router = useRouter();

  useEffect(() => {
    if (scanned) {
      const timer = setTimeout(() => {
        router.replace("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [scanned, router, setScanned]);

  return scanned ? <SendLoading /> : <ScanGuideLine onScanClick={() => setScanned(true)} />;
}

export default WithAuth(ScanPage);
