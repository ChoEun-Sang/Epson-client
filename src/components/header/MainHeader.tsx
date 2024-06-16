import Image from "next/image";
import { ARTIST } from "@/lib/constants/mocking";
import { useState } from "react";

function MainHeader() {
  const [selectedValue, setSelectedValue] = useState("아이유");
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center w-full">
      <div className="relative inline-block w-64">
        <button
          className={`flex items-center text-2xl font-bold ${isOpen ? "on" : ""}  py-2 focus:outline-none`}
          onClick={toggleList}
        >
          {selectedValue}
          <div className="flex items-center text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </button>
        {isOpen && (
          <ul className="absolute mt-1 bg-background border border-gray-300 rounded shadow-lg z-10">
            {ARTIST.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="w-full text-left py-2 px-4 hover:bg-gray-100"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-end w-full h-6 gap-6">
        <button>
          <Image src="/notifications.png" width={24} height={24} alt="notifications" />
        </button>
        <button>로그인</button>
      </div>
    </div>
  );
}

export default MainHeader;
