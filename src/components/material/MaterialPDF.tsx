import { IMAGE_BASE_URL, NO_TOOL_BAR } from "@/lib/constants/constants";

function MaterialPDF({ pdfURL }: { pdfURL: string }) {
  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center gap-4 innerheight scrollon">
      <div className="relative w-full h-full">
        <iframe
          src={IMAGE_BASE_URL + pdfURL + NO_TOOL_BAR}
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
