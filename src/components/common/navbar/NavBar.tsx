import NavMenu from "./NavMenu";
import { ITEMS } from "@/lib/constants/navMenuItems";

const NavBar = () => {
  return (
    <nav className="bg-background max-w-[375px] h-20 fixed bottom-0 left-0 right-0 mx-auto">
      <ul className="h-full flex justify-around items-center">
        {ITEMS.map((item) => (
          <NavMenu key={item.ko} path={item.path}>
            {item.ko}
          </NavMenu>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
