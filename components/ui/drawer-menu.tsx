import { cart } from "@/assets";
import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DrawerMenuProps {
  showMenu: boolean;
}

export const DrawerMenu = ({ showMenu }: DrawerMenuProps) => {
  const pathName = usePathname();
  const baseClass = `p-5 relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0
  before:h-0.5 before:bg-secondary before:rounded-full before:transition-all before:duration-300 hover:before:w-full`;

  return (
    <aside
      className={cn(
        "fixed top-0 lg:left-0 border-gray-500/30  w-full h-full transition-all duration-300 ease-in-out z-100 mt-[90px] bg-primary",
        showMenu ? "left-0" : "-left-full"
      )}
    >
      <ul className="lg:hidden ">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={cn(
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
            baseClass,
            pathName === "/cart" &&
              "text-primary before:w-full before:bg-primary "
          )}
        >
          <Image src={cart} alt="cart" className="text-primary" />
        </Link>
      </ul>
    </aside>
  );
};
