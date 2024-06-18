"use client";

import { Dispatch, SetStateAction } from "react";
import { Slider } from "../ui/slider";

interface FontSizeSliderProps {
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
}

function FontSizeSlider({ size, setSize }: FontSizeSliderProps) {
  return (
    <div className="flex gap-x-2 h-fit items-center bg-yellow-200">
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
  );
}

export default FontSizeSlider;
