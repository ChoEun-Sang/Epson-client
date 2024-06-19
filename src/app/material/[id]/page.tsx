"use client";
import MaterialPDF from "@/components/material/MaterialPDF";
import { useSearchParams } from "next/navigation";

function PDF() {
  const params = useSearchParams();
  const url = params.get("url");

  return <MaterialPDF url={`${url}`} />;
}

export default PDF;
