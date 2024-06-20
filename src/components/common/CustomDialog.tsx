"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogPortal, DialogTrigger } from "../ui/dialog";
import { ReactNode } from "react";

interface CustomDialogProps {
  title: string;
  children: ReactNode;
}

function CustomDialog({ title, children }: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="bg-primary-8 font-bold text-xs px-2 h-[32px]">
          원본보기
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogContent className="h-[700px] w-[365px] overflow-auto main" hideCloseButton>
          <div className="w-full h-full absolute px-4 py-4 text-center">
            <div className="flex w-full h-[90px] items-end">
              <p className="relative font-bold text-[22px] w-full mb-2">
                {title}
                <DialogClose className="absolute left-0 top-0 bottom-0">
                  <Image src={"/close.svg"} alt="" width={24} height={24} />
                </DialogClose>
              </p>
            </div>
            {children}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default CustomDialog;
