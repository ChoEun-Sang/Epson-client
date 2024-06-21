"use client";
import Mail from "./Mail";
import useMailListQuery from "@/hooks/queries/useMailListQuery";

interface User {
  id: number;
  username: string;
  img: string;
  role: string;
  createdAt: string;
}

interface MailProps {
  id: number;
  title: string;
  status: string;
  letterDocumentId: string;
  createdAt: string;
  receiver?: User;
  sender?: User;
}

function MailList({ object }: { object: string }) {
  const { data } = useMailListQuery(object);

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <ul>
      {data.map((value: MailProps) => (
        <Mail key={value.id} data={value} object={object} />
      ))}
    </ul>
  );
}

export default MailList;
