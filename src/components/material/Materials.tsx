import useMaterialQuery from "@/hooks/queries/useMaterialQuery";
import React from "react";
import Material from "./Material";

interface MaterialProps {
  id: number;
  keywords: string[];
  title: string;
  url: string;
  createdAt: string;
}

function Materials() {
  const { data } = useMaterialQuery();

  if (!data) {
    return <div>NO data</div>;
  }

  return (
    <ul>
      {data.map((value: MaterialProps, idx: number) => (
        <Material key={value.id} data={value} idx={idx} />
      ))}
    </ul>
  );
}

export default Materials;
