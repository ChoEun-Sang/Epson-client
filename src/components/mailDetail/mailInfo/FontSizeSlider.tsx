"use client";

import { Slider } from "@/components/ui/slider";
import useFontSizeStore from "@/store/useFontSizeStore";

function FontSizeSlider() {
  const { size, setSize } = useFontSizeStore();
  return (
    <>
      <div className="flex gap-x-2 h-fit items-center pt-8 pb-4">
        <span className="font-medium text-xs">A</span>
        <Slider
          defaultValue={[16]}
          min={12}
          max={22}
          step={1}
          value={[size]}
          onValueChange={(value) => setSize(value[0])}
        />
        <span className="font-bold text-2xl">A</span>
      </div>
      <div className="flex flex-col text-start">
        <p className="text-text-info font-semibold flex gap-x-2 py-2" style={{ fontSize: size }}>
          <span className="text-primary-3 font-bold text-xs align-text-top">1</span>
          <p>
            The <span className="text-primary-7 font-bold">quick </span>brown fox{" "}
            <span className="text-primary-7 font-bold">jumps </span>
            over the <span className="text-primary-7 font-bold">lazy </span>dog
          </p>
        </p>
        <p className="text-text-info font-semibold flex gap-x-2 py-2" style={{ fontSize: size }}>
          <span className="text-primary-3 font-bold text-xs align-text-top">2</span>
          When the sentence gets longer, it looks like this.
        </p>
      </div>
    </>
  );
}

export default FontSizeSlider;
