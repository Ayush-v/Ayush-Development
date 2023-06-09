import { cn } from "@/utils/tailwind-merge";
import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `mx-auto mt-4 w-full max-w-7xl flex-1 pb-20 md:mt-20 lg:px-8 ${className}`
      )}
    >
      {children}
    </div>
  );
}
