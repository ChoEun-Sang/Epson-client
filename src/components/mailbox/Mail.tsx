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
  letterDocumentId: string;
  createdAt: string;
  receiver?: User;
  sender?: User;
}

function Mail({ data }: { data: MailProps }) {
  return (
    <li className="p-4 mb-2 bg-gray-100 rounded-sm">
      <Link href={`/mailbox/${data.letterDocumentId}`}>
        <div className="flex justify-between">
          <span>
            <strong>To.</strong> {data.receiver ? data.receiver.username : "유애나"}
          </span>
          <strong>{data.title}</strong>
        </div>
        <div className="flex justify-between">
          <span>{data.createdAt}</span>
          <span>
            <strong>From.</strong> {data.sender ? data.sender.username : "유애나"}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default Mail;
