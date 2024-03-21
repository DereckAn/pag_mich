import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cart } from "@/assets";

interface NewDrawerMenuProps {
  showMenu: boolean;
}

export const NewDrawerMenu = ({ showMenu }: NewDrawerMenuProps) => {
  const pathName = usePathname();
  const baseClass = `relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0
  before:h-0.5 before:bg-secondary before:rounded-full before:transition-all before:duration-300 hover:before:w-full text-5xl`;

  return (
    <aside
      className={cn(
        "fixed h-full  w-full transition-all duration-300 ease-in-out  bg-red-400 z-0"
        // showMenu ? "left-0" : "-left-full"
      )}
    >
      <ul className="bg-gray-600">
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
    </aside>
  );
};
