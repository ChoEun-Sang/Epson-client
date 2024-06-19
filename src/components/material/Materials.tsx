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
  // const { data } = useMaterialQuery();

  // if (!data) {
  // }

  const testData = [
    {
      id: 2,
      keywords: ["test", "1231", "안녕"],
      title: "테스트를 위한 테스트",
      url: "https://aigooback.blob.core.windows.net/test/test.pdf",
      createdAt: "2024-06-18T10:29:01.957Z",
    },
  ];

  return (
    <ul>
      {testData.map((value: MaterialProps, idx: number) => (
        <Material key={value.id} data={value} idx={idx} />
      ))}
    </ul>
  );
}

export default Materials;
