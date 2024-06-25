import { cn } from "@/utils/utils";
import { ReactNode } from "react";

interface SectionDialogItemProps {
  title: string;
  children: ReactNode;
  className?: string;
}
export const SectionDialogItem = ({
  children,
  title,
  className,
}: SectionDialogItemProps) => {
  return (
    <section className="p-2 md:p-5 space-y-4 ">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>
      <hr className=" border-primary " />
    </section>
  );
};
