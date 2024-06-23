import { RefObject, useEffect } from "react";

function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  ignoreRef?: RefObject<HTMLElement>
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!ignoreRef || (ignoreRef.current && !ignoreRef.current.contains(event.target as Node)))
      ) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ignoreRef]);
}

export default useOutsideClick;
