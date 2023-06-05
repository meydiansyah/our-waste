
"use client";

import { Dispatch, SetStateAction, ReactNode } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import useWindowSize from "@/lib/hooks/use-window-size";

export default function Popover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile, isDesktop } = useWindowSize();
  if (!isMobile && !isDesktop) return <>{children}</>;
  return (
    <>
      {isDesktop && (
        <PopoverPrimitive.Root
          open={openPopover}
          onOpenChange={(isOpen) => setOpenPopover(isOpen)}
        >
          <PopoverPrimitive.Trigger className="inline-flex" asChild>
            {children}
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content
			  aria-level={2}
            sideOffset={8}
            align={align}
            className="z-20 animate-slide-up-fade items-center border rounded-md border-gray-200 bg-white drop-shadow-lg"
          >
            {content}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
      )}
    </>
  );
}
