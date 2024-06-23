import { ARTIST } from "@/lib/constants/mocking";
import { useRef, useState, MouseEvent } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

function MainSelectArtist() {
  const [selectedValue, setSelectedValue] = useState("아이유");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const toggleList = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
    <div>
      <button
        className={`flex items-center text-2xl title2 ${isOpen ? "on" : ""} focus:outline-none`}
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
        <ul ref={dropdownRef} className="absolute mt-1 bg-background border border-gray-300 rounded shadow-lg z-10">
          {ARTIST.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="w-full text-left py-2 px-4 body2 hover:bg-gray-100"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MainSelectArtist;
