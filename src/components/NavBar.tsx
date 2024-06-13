import NavMenu from "./NavMenu";
import { ITEMS } from "@/lib/constants/navMenuItems";

const NavBar = () => {
  return (
    <nav className="bg-red-500 w-full h-20">
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
