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

  return (
    <ul>
      {data ? (
        data.map((value: MailProps) => <Mail key={value.id} data={value} object={object} />)
      ) : (
        <div className="col-span-2 text-center w-full h-[252px] body2 text-text-info">No letters available</div>
      )}
    </ul>
  );
}

export default MailList;
