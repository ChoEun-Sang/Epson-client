"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import List from "@/components/sendMail/List";
import Spacing from "@/components/common/spacing/Spacing";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { connectDevice, connectDeviceVerify } from "@/lib/api/api";
import useUserStore from "@/store/useUserStore";

function SendMailScanPage() {
  const [device, setDevice] = useState("");
  const [title, setTitle] = useState("");
  const [isDeviceValid, setIsDeviceValid] = useState(false);
  const [deviceTouched, setDeviceTouched] = useState(false);
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  const { userData, setUserData } = useUserStore();

  useEffect(() => {
    if (userData?.epsonDevice) {
      const deviceEmail = userData.epsonDevice.split("@")[0];
      setDevice(deviceEmail);
      setIsDeviceValid(validateEmail(userData.epsonDevice));
      setDeviceTouched(true);
      setIsDeviceConnected(true);
    }
  }, [userData]);

  const emailDomain = "@print.epsonconnect.com";
  const email = `${device}${emailDomain}`;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@print\.epsonconnect\.com$/;
    return re.test(String(email).toLowerCase());
  };

  const validateTitle = (title: string) => {
    return title.trim() !== "";
  };

  useEffect(() => {
    if (deviceTouched) {
      setIsDeviceValid(validateEmail(email));
    }
  }, [email, deviceTouched]);

  useEffect(() => {
    if (titleTouched) {
      setIsTitleValid(validateTitle(title));
    }
  }, [titleTouched, title]);

  const handleDeviceBlur = () => {
    setDeviceTouched(true);
    setIsDeviceValid(validateEmail(email));
  };

  const handleTitleBlur = () => {
    setTitleTouched(true);
    setIsTitleValid(validateTitle(title));
  };

  const handleChangeDevice = (e: ChangeEvent<HTMLInputElement>) => {
    setDevice(e.target.value);
    setIsDeviceValid(validateEmail(`${e.target.value}${emailDomain}`));
    setIsDeviceConnected(false);
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsTitleValid(validateTitle(`${e.target.value}`));
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

  return (
    <section>
      <Spacing size={32} />
      <List number={1}>
        <div>
          <Label htmlFor="connect" className="body1">
            먼저 기기 연결이 필요해요.
          </Label>
        </div>
      </List>
      <Spacing size={8} />
      <div className="pl-10 flex gap-1.5">
        <Input
          id="connect"
          type="text"
          placeholder="기기 고유번호를 입력해 주세요."
          className={`focus-visible:ring-transparent border ${
            !deviceTouched ? "border-gray-300" : isDeviceValid ? "border-green-500" : "border-red-500"
          }`}
          value={device}
          onBlur={handleDeviceBlur}
          onChange={handleChangeDevice}
        />
        <Button
          className={`${isDeviceConnected ? "bg-green-500" : !isDeviceValid || isLoading ? "" : "bg-primary-8"}`}
          onClick={handleConnectDevice}
          disabled={!isDeviceValid || isLoading || isDeviceConnected}
        >
          연결
        </Button>
      </div>
      <Spacing size={24} />
      <List number={2}>
        <div>
          <Label htmlFor="title" className="body1">
            제목을 적은 후
          </Label>
        </div>
      </List>
      <Spacing size={8} />
      <div className="pl-10">
        <Input
          id="title"
          type="text"
          placeholder="제목을 입력하세요."
          className={`focus-visible:ring-transparent border ${
            !titleTouched ? "border-gray-300" : isTitleValid ? "border-green-500" : "border-red-500"
          }`}
          value={title}
          onBlur={handleTitleBlur}
          onChange={handleChangeTitle}
        />
      </div>
      <Spacing size={24} />
      <List number={3}>
        <div>
          <p>기기 연결 버튼을 누르면</p>
        </div>
      </List>
      <Spacing size={24} />
      <List number={4}>
        <div>
          <p>기기에 스캔 요청!💌</p>
        </div>
      </List>
      <Spacing size={250} />
      <div className="">
        <Button
          className={`w-full h-14 body1 ${
            !isDeviceValid || !isTitleValid || !isDeviceConnected || isLoading ? "" : "bg-primary-8"
          }`}
          disabled={!isDeviceValid || !isTitleValid || !isDeviceConnected || isLoading}
        >
          스캔요청
        </Button>
      </div>
    </section>
  );
}

export default SendMailScanPage;
