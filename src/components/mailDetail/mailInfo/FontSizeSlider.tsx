"use client";

import { Slider } from "@/components/ui/slider";
import useFontSizeStore from "@/store/useFontSizeStore";

function FontSizeSlider() {
  const { size, setSize } = useFontSizeStore();
  return (
    <>
      <div className="flex gap-x-2 h-fit items-center pt-8 pb-4">
        <span className="font-medium text-xs">가</span>
        <Slider
          defaultValue={[16]}
          min={12}
          max={22}
          step={1}
          value={[size]}
          onValueChange={(value) => setSize(value[0])}
        />
        <span className="font-bold text-2xl">가</span>
      </div>
      <div className="flex flex-col text-start">
        <p className="text-text-info font-semibold flex gap-x-2 py-2" style={{ fontSize: size }}>
          <span className="text-primary-3 font-bold text-xs align-text-top">1</span>
          <p>
            <span className="text-primary-8">아빠</span>가 멋진 <span className="text-primary-8">가방</span>에
            들어가십니다.
          </p>
        </p>
        <p className="text-text-info font-semibold flex gap-x-2 py-2" style={{ fontSize: size }}>
          <span className="text-primary-3 font-bold text-xs align-text-top">2</span>
          문장이 길어지면 어떻게 되냐면요 이렇게 됩니다.
        </p>
      </div>
    </>
  );
}

export default FontSizeSlider;
