import Link from "next/link";
import dayjs from "dayjs";

interface MaterialProps {
  id: number;
  keywords: string[];
  title: string;
  url: string;
  createdAt: string;
}
function Material({ data, idx }: { data: MaterialProps; idx: number }) {
  const date = dayjs(data.createdAt).format("YYYY-MM-DD (ddd) hh:mm");

  return (
    <li className="p-4 mb-2 bg-gray-100 rounded-sm">
      <Link href={{ pathname: `/material/${data.id}`, query: { pdf: data.url } }} className="space-y-2">
        <div className="flex justify-between">
          <strong className="text-text-info">No. {idx + 1}</strong>

          <strong className="text-text-sub">{data.title}</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-text-disabled">{date}</span>

          <strong className="text-text-info">{data.keywords.length} Keywords</strong>
        </div>
      </Link>
    </li>
  );
}

export default Material;
