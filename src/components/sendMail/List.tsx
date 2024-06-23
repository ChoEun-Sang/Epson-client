import { ReactNode } from "react";

interface ListProps {
  number: number;
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
}

const List = ({ number, children, backgroundColor, color }: ListProps) => {
  return (
    <div className="flex gap-4">
      <p
        className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-2 footnote1 text-text-info"
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {number}
      </p>
      <div className="body1 text-text-sub">{children}</div>
    </div>
  );
};

export default List;
