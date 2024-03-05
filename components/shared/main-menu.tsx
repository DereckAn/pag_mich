import { cart } from "@/assets";
import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainMenuProps {
  showMenu?: boolean;
  onClose?: () => void;
}

export const MainMenu = ({ showMenu, onClose }: MainMenuProps) => {
  const pathName = usePathname();
  const baseClass = `p-5 relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0
  before:h-0.5 before:bg-secondary before:rounded-full before:transition-all before:duration-300 hover:before:w-full`;
  return (
    <div>
      <div className="flex">
        <ul className="hidden lg:flex items-center ">
          <li>
            {routes.map((route) => (
              <Link
                href={route.path}
                key={route.path}
                className={cn(
                  baseClass,
                  pathName === route.path &&
                    "text-primary before:w-full before:bg-primary  "
                )}
              >
                {route.name}
              </Link>
            ))}
          </li>
        </ul>
        <Link
          href="/cart"
          className={cn(
            "hidden lg:flex ",
            baseClass,
            pathName === "/cart" &&
              "text-primary before:w-full before:bg-primary "
          )}
        >
          <Image src={cart} alt="cart" className="text-primary" />
        </Link>
      </div>
      <button className="relative lg:hidden" onClick={() => {}}>
        <span className="bg-secondary absolute right-0 -top-4 h-0.5 w-8 topb" />
        <span className="bg-secondary absolute right-0 -top-2 h-0.5 w-8 middleb" />
        <span className="bg-secondary absolute right-0 -top-0 h-0.5 w-8 bottomb" />
      </button>
      
    </div>
  );
};
