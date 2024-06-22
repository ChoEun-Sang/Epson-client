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

export default function SendMailScanPage() {
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
    toast.success("이미지를 업로드했어요!");
  };

  const handleUpload = async () => {
    if (!imgFile) return;
    setSent(true);
    setIsLoadingUpload(true);

    try {
      const data = await sendLetterUpload(imgFile, ["text"], title, "2");

      if (data) {
        toast.success("편지를 보내고 있어요!");
      }
    } catch (error) {
      console.error(error);
      toast.error("편지 보내기에 실패했어요!");
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
            편지 제목을 적고
          </Label>
        </div>
      </List>
      <Spacing size={8} />
      <div className="pl-10 flex gap-1.5">
        <Input
          id="title"
          type="text"
          placeholder="제목을 입력하세요."
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
            손편지 이미지를 선택하면
          </Label>
        </div>
      </List>
      <Spacing size={8} />
      <Label className="flex flex-col justify-center items-center w-[339px] h-[303px] outline-dashed outline-2 outline-gray-8 rounded-lg mx-0.5 cursor-pointer">
        {preview ? (
          <div className="w-[339px] h-[303px] object-cover">
            <Image src={preview} width={339} height={303} alt="미리보기" className="w-full h-full" />
          </div>
        ) : (
          <>
            <Image src="/add.png" width={48} height={48} alt="이미지 업로드" />
            <p className="body3 text-gray-8">이미지 업로드하기</p>
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
          <p>보내기 버튼을 누르면</p>
        </div>
      </List>
      <Spacing size={24} />
      <List number={4}>
        <div>
          <p>아이유에게 편지 전송 완료!💌</p>
        </div>
      </List>
      <Spacing size={66} />
      <div>
        <Button
          onClick={handleUpload}
          disabled={!isTitleValid || !imgFile || isLoadingUpload}
          className={`w-full h-14 body1 ${!isTitleValid || !imgFile || isLoadingUpload ? "" : "bg-primary-8"}`}
        >
          보내기
        </Button>
      </div>
    </section>
  );
}
