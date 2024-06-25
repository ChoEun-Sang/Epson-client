"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import List from "@/components/sendMail/List";
import Spacing from "@/components/common/spacing/Spacing";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { sendLetterUpload } from "@/lib/api/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SendLoading from "../sendFlow/SendLoading";
import useSentStore from "@/store/useSentStore";
import withAuth from "@/lib/util/WithAuth";

function SendMailScanPage() {
  const [title, setTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const { sent, setSent } = useSentStore();

  const router = useRouter();

  const validateTitle = (title: string) => {
    return title.trim() !== "";
  };

  useEffect(() => {
    if (titleTouched) {
      setIsTitleValid(validateTitle(title));
    }
  }, [titleTouched, title]);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [router, sent]);

  const handleTitleBlur = () => {
    setTitleTouched(true);
    setIsTitleValid(validateTitle(title));
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsTitleValid(validateTitle(e.target.value));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImgFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
    toast.success("I have uploaded the image!");
  };

  const handleUpload = async () => {
    if (!imgFile) return;
    setSent(true);
    setIsLoadingUpload(true);

    try {
      const data = await sendLetterUpload(imgFile, ["text"], title, "2");

      if (data) {
        toast.success("I'm sending a letter!");
      }
    } catch (error) {
      console.error(error);
      toast.error("failed to send a letter!");
    } finally {
      setIsLoadingUpload(false);
    }
  };

  return sent ? (
    <SendLoading />
  ) : (
    <section className="innerheight scrollon">
      <Spacing size={32} />
      <List number={1}>
        <div>
          <Label htmlFor="title" className="body1">
            Please write the letter title
          </Label>
        </div>
      </List>
      <Spacing size={8} />
      <div className="pl-10 flex gap-1.5">
        <Input
          id="title"
          type="text"
          placeholder="Please enter a title."
          className={`focus-visible:ring-transparent ${
            !titleTouched ? "border-gray-300" : isTitleValid ? "border-green-500" : "border-red-500"
          }`}
          value={title}
          onChange={handleChangeTitle}
          onBlur={handleTitleBlur}
        />
      </div>
      <Spacing size={24} />
      <List number={2}>
        <div>
          <Label htmlFor="file" className="body1">
            If you select a handwritten letter image
          </Label>
        </div>
      </List>
      <Spacing size={8} />
      <Label className="flex flex-col justify-center items-center w-[339px] h-[303px] outline-dashed outline-2 outline-gray-8 rounded-lg mx-0.5 cursor-pointer">
        {preview ? (
          <div className="w-[339px] h-[303px] object-cover">
            <Image src={preview} width={339} height={303} alt="preview" className="w-full h-full" />
          </div>
        ) : (
          <>
            <Image src="/add.png" width={48} height={48} alt="upload_image" />
            <p className="body3 text-gray-8">Upload an image</p>
          </>
        )}
        <Input
          id="file"
          type="file"
          accept="image/*"
          className={`focus-visible:ring-transparent hidden`}
          onChange={handleFileChange}
        />
      </Label>
      <Spacing size={24} />
      <List number={3}>
        <div>
          <p>If you press the &quot;Send&quot; button</p>
        </div>
      </List>
      <Spacing size={24} />
      <List number={4}>
        <div>
          <p>Letter sent to IU!💌</p>
        </div>
      </List>
      <Spacing size={43} />
      <div>
        <Button
          onClick={handleUpload}
          disabled={!isTitleValid || !imgFile || isLoadingUpload}
          className={`w-full h-14 body1 ${!isTitleValid || !imgFile || isLoadingUpload ? "" : "bg-primary-8"}`}
        >
          Send
        </Button>
      </div>
    </section>
  );
}

export default withAuth(SendMailScanPage);
