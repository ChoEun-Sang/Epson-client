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

  const isPending = data.status === "pending";

  const isFailed = data.status === "failed";

  const pendingStyles = isPending || isFailed ? "opacity-50 pointer-events-none" : "";

  return (
    <li className={`p-4 mb-2 bg-gray-100 rounded-sm ${pendingStyles}`}>
      <Link href={`/mailbox/${data.letterDocumentId}`} className="space-y-2">
        <div className="flex justify-between">
          <span className="callout1 text-text-info">
            <strong>To.</strong> {object === "sent" ? data.receiver?.username : userData?.username}
          </span>
          <strong className="body1 text-text-sub">{isPending || isFailed ? "˙ ˙ ˙" : data.title}</strong>
        </div>
        <div className="flex justify-between">
          <span className="footnote3 text-text-disabled">
            {isPending ? "Loading Letter" : isFailed ? "Failed" : date}
          </span>
          <span className="callout1 text-text-info">
            <strong>From.</strong> {object === "sent" ? userData?.username : data.sender?.username}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default Mail;
