import { ReactNode } from "react";

interface ListProps {
  number: number;
  children: ReactNode;
}

const List = ({ number, children }: ListProps) => {
  return (
    <div className="flex gap-4">
      <p className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-2 footnote1">{number}</p>
      <div className="body1">{children}</div>
    </div>
  );
};

export default List;
