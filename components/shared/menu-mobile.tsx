import { navmenu } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";


interface MenuMobileProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  const pathName = usePathname();
  return (
    <>
      <div
        className={cn(
          "fixed right-0 top-0 w-72 h-full lg:hidden bg-green-100 z-50 flex flex-col items-center justify-center transition-all",
          isOpen ? "top-0 delay-300" : "-top-full"
        )}
      >
        <ul className="flex flex-col gap-y-4 ">
          {navmenu.map((item) => (
            <li key={item.title}>
              <Link
              onClick={() => onClose(false)}
                href={item.path}
                className={cn(
                  "text-primary flex items-center gap-x-2 py-3 px-6 rounded-full text-2xl ",
                  item.path === pathName &&
                    "bg-primary font-medium text-vainilla"
                )}
              >
                <i className={item.icon}></i>

                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => onClose(false)}
        className={cn(
          "fixed  bg-black/40 z-30 lg:hidden transition-all",
          isOpen
            ? "h-full w-full right-0 top-0"
            : "w-0 h-0 left-0 bottom-0 delay-300"
        )}
      />
    </>
  );
};

