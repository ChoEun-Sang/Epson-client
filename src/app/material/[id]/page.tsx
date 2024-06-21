"use client";
import MaterialPDF from "@/components/material/MaterialPDF";
import { useSearchParams } from "next/navigation";

function PDF() {
  const searchParams = useSearchParams();

  const pdfURL = searchParams.get("pdf");

  return <MaterialPDF pdfURL={pdfURL || ""} />;
}

export default PDF;
