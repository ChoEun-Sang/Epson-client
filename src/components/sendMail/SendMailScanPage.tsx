"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import List from "@/components/sendMail/List";
import Spacing from "@/components/common/spacing/Spacing";
import { Button } from "../ui/button";
import { toast } from "sonner";
import useUserStore from "@/store/useUserStore";
import Link from "next/link";
import { requestScanDevice } from "@/lib/api/api";
import useDeviceRegistration from "@/hooks/useDeviceConnect";
import WithAuth from "@/lib/util/WithAuth";

function SendMailScan() {
  const [title, setTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const { userData } = useUserStore();
  const {
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
  } = useDeviceRegistration();

  useEffect(() => {
    if (userData?.epsonDevice) {
      const deviceEmail = userData.epsonDevice.split("@")[0];
      setDevice(deviceEmail);
      setIsDeviceValid(true);
      setDeviceTouched(true);
      setIsDeviceConnected(true);
    }
  }, [userData, setDevice, setIsDeviceConnected, setIsDeviceValid, setDeviceTouched]);

  const validateTitle = (title: string) => {
    return title.trim() !== "";
  };

  useEffect(() => {
    if (titleTouched) {
      setIsTitleValid(validateTitle(title));
    }
  }, [titleTouched, title]);

  const handleTitleBlur = () => {
    setTitleTouched(true);
    setIsTitleValid(validateTitle(title));
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsTitleValid(validateTitle(`${e.target.value}`));
  };

  const handleRequest = async () => {
    setIsLoadingRequest(true);
    try {
      const data = await requestScanDevice("2", title);
      if (data) {
        toast.success("Requested a scan!");
      }
    } catch (error) {
      console.error("Scan failed:", error);
      toast.error("Scan failed!");
    } finally {
      setIsLoadingRequest(false);
    }
  };

  return (
    <section className="innerheight scrollon h-full flex flex-col justify-between pb-4">
      <div className="flex flex-col">
        <Spacing size={32} />
        <List number={1}>
          <div>
            <Label htmlFor="connect" className="body1">
              Enter the access key to connect to the printer
            </Label>
          </div>
        </List>
        <Spacing size={8} />
        <div className="pl-10 flex gap-1.5">
          <Input
            id="connect"
            type="text"
            placeholder="Please enter a print access key."
            className={`focus-visible:ring-transparent border ${
              !deviceTouched ? "border-gray-300" : isDeviceValid ? "border-green-500" : "border-red-500"
            }`}
            value={device}
            onBlur={handleDeviceBlur}
            onChange={handleChangeDevice}
          />
          <Button
            className={`${isDeviceConnected && "bg-green-500"}`}
            onClick={handleConnectDevice}
            disabled={!isDeviceValid || isLoading || isDeviceConnected}
          >
            Connect
          </Button>
        </div>
        <Spacing size={24} />
        <List number={2}>
          <div>
            <Label htmlFor="title" className="body1">
              Enter the letter title
            </Label>
          </div>
        </List>
        <Spacing size={8} />
        <div className="pl-10">
          <Input
            id="title"
            type="text"
            placeholder="Please enter a title."
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
            <p>If you press the &quot;pressed&quot; button on the next page</p>
          </div>
        </List>
        <Spacing size={24} />
        <List number={4} backgroundColor="#949494" color="white">
          <div>
            <p>Letter sent to IU!💌</p>
          </div>
        </List>
      </div>
      <Link href="/mailscan/scan">
        <Button
          className={`w-full h-14 body1`}
          onClick={handleRequest}
          disabled={!isDeviceValid || !isTitleValid || !isDeviceConnected || isLoading || isLoadingRequest}
        >
          Next
        </Button>
      </Link>
    </section>
  );
}

export default WithAuth(SendMailScan);
