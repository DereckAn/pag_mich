import { cn } from "@/utils/utils";
import Link from "next/link";

interface ButtonsProps {
  className?: string;
  href: string;
  text: string;
}

export const Buttons = ({ className, href, text }: ButtonsProps) => {
  return (
    <Link href={href} className={cn("px-7 py-3 rounded-3xl", className)}>
      {text}
    </Link>
  );
};
