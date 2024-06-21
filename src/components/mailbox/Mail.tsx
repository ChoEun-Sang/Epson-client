"use client";
import useUserStore from "@/store/useUserStore";
import dayjs from "dayjs";
import Link from "next/link";

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

function Mail({ data, object }: { data: MailProps; object: string }) {
  const userData = useUserStore((state) => state.userData);
  const date = dayjs(data.createdAt).format("YYYY-MM-DD (ddd) hh:mm");

  const isPendding = data.status === "pedding" ? "opacity-50 pointer-events-none" : "";

  return (
    <li className={`p-4 mb-2 bg-gray-100 rounded-sm ${isPendding}`}>
      <Link href={`/mailbox/${data.letterDocumentId}`}>
        <div className="flex justify-between">
          <span className="text-text-info">
            <strong>To.</strong> {object === "sent" ? data.receiver?.username : userData?.username}
          </span>
          <strong className="text-text-sub">{data.title}</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-text-disabled">{date}</span>
          <span className="text-text-info">
            <strong>From.</strong> {object === "sent" ? userData?.username : data.sender?.username}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default Mail;
