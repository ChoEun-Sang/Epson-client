import Image from "next/image";
import { usePathname } from "next/navigation";
import Signin from "./signin/Signin";
import useUserStore from "@/store/useUserStore";
import UserInfo from "./userInfo/UserInfo";
import MainSelectArtist from "./userInfoHeader/MainSelectArtist";
import MailBox from "./userInfoHeader/MailBox";
import MaterialHeader from "./userInfoHeader/MaterialHeader";

function UserHeader() {
  const pathname = usePathname();
  const { userData } = useUserStore();

  return (
    <div className="flex items-end w-full">
      <div className="relative inline-block w-64 title2">
        {pathname === "/" ? <MainSelectArtist /> : pathname === "/notes" ? <MaterialHeader /> : <MailBox />}
      </div>

      <div className="flex justify-end w-full gap-6 relative z-50">
        <button>
          <Image src="/notifications.svg" width={24} height={24} alt="notifications" />
        </button>
        {userData?.id ? <UserInfo /> : <Signin />}
      </div>
    </div>
  );
}

export default UserHeader;
