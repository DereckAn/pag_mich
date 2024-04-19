import { cn } from "@/utils/utils";
import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container mx-auto py-20 gap-10 flex flex-col text-textcolor ", className)}>
      {children}
    </div>
  );
};
