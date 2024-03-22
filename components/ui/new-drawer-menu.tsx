import { cart } from "@/assets";
import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NewDrawerMenuProps {
  className?: string;
}

export const NewDrawerMenu = ({ className }: NewDrawerMenuProps) => {
  const pathName = usePathname();
  const baseClass = `relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0
  before:h-0.5 before:bg-secondary before:rounded-full before:transition-all before:duration-300 hover:before:w-full text-8xl font-bold`;

  return (
    <div
      className={cn(
        "fixed pl-[30%] flex justify-center items-center  ",
        className
      )}
    >
      <ul className=" bg-red-300">
        {routes.map((route) => (
          <li key={route.path} className="py-5 px-8">
            <Link
              href={route.path}
              className={cn(
                "",
                baseClass,
                pathName === route.path &&
                  "text-primary before:w-full before:bg-primary "
              )}
            >
              {route.name}
            </Link>
          </li>
        ))}
        <Link
          href="/cart"
          className={cn(
            "w-[5rem] mt-5 ml-8",
            baseClass,
            pathName === "/cart" &&
              "text-primary before:w-full before:bg-primary "
          )}
        >
          <Image src={cart} alt="cart" className="text-primary w-[5rem] ml-8" />
        </Link>
      </ul>
    </div>
  );
};
