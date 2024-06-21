import { cn } from "@/utils/utils";
import Link from "next/link";

interface LinkProProps {
  className?: string;
  href: string;
  text: string;
}

export const LinkPro = ({ className, href, text }: LinkProProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-7 py-3 rounded-3xl hover:bg-amarillo transition-all duration-300 ease-in-out hover:text-primary hover:font-bold",
        className
      )}
    >
      {text}
    </Link>
  );
};
