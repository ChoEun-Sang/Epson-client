function MaterialPDF({ pdfURL }: { pdfURL: string }) {
  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center gap-4 innerheight scrollon">
      <div className="relative w-full h-full">
        <iframe
          src={`https://aigooback.blob.core.windows.net${pdfURL}#toolbar=0&navpanes=0&scrollbar=0`}
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
