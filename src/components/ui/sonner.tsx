"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      style={{ bottom: "100px" }}
      className="toaster group mx-auto w-full flex justify-center relative"
      position="bottom-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:w-[343px] group-[.toaster]:rounded-lg group-[.toaster]:h-[48px] flex items-center px-4",
          title: "group-[.toast]:text-xs group-[.toast]:text-white ml-2 mx-auto",
          // description: "group-[.toast]:text-sm group-[.toast]:text-white",
          actionButton: "group-[.toast]:text-xs group-[.toast]:text-primary-5 group-[.toast]:font-bold",
          // cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          icon: "group-data-[type=error]:text-red-500 group-data-[type=success]:text-green-500 group-data-[type=warning]:text-amber-500 group-data-[type=info]:text-blue-500",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
