import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import { connectDevice, connectDeviceVerify } from "@/lib/api/api";
import useUserStore from "@/store/useUserStore";

const useDeviceRegistration = () => {
  const [device, setDevice] = useState("");
  const [isDeviceValid, setIsDeviceValid] = useState(false);
  const [deviceTouched, setDeviceTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  const { setUserData } = useUserStore();

  const emailDomain = "@print.epsonconnect.com";
  const email = `${device}${emailDomain}`;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@print\.epsonconnect\.com$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDeviceBlur = () => {
    setDeviceTouched(true);
    setIsDeviceValid(validateEmail(email));
  };

  const handleChangeDevice = (e: ChangeEvent<HTMLInputElement>) => {
    setDevice(e.target.value);
    setIsDeviceValid(validateEmail(`${e.target.value}${emailDomain}`));
    setIsDeviceConnected(false);
  };

  const handleConnectDevice = async () => {
    setIsLoading(true);
    try {
      await connectDevice(email);
      const data = await connectDeviceVerify();
      if (data) {
        const userData = {
          img: "",
          id: data.userId,
          username: data.username,
          myFavorite: "",
          epsonDevice: data.epsonDevice,
        };
        setUserData(userData);
        toast.success("기기에 성공적으로 연결했습니다!");
      }
      setIsDeviceConnected(true);
    } catch (error) {
      console.error("기기 연결 도중 오류 발생:", error);
      toast.error("기기 연결에 실패했습니다!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    device,
    setDevice,
    isDeviceValid,
    setIsDeviceValid,
    deviceTouched,
    setDeviceTouched,
    isDeviceConnected,
    setIsDeviceConnected,
    isLoading,
    handleDeviceBlur,
    handleChangeDevice,
    handleConnectDevice,
  };
};

export default useDeviceRegistration;
