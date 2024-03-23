import { cart } from "@/assets";
import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NewDrawerMenuProps {
  className?: string;
  setShowMenu?: (showMenu: boolean) => void;
}

export const NewDrawerMenu = ({
  className,
  setShowMenu,
}: NewDrawerMenuProps) => {
  const pathName = usePathname();
  const baseClass = `subrayado text-8xl font-bold`;

  return (
    <div className={cn(" flex justify-center  ", className)}>
      <ul className=" bg-transparent fixed  flex  flex-col justify-center items-center">
        {routes.map((route) => (
          <li
            key={route.path}
            className="py-5 px-8 flex justify-center items-center wobble-horizontal-bottom "
          >
            <Link
              onClick={() => setShowMenu && setShowMenu(false)}
              href={route.path}
              className={cn(
                baseClass,
                pathName === route.path &&
                  "text-primary before:w-full before:bg-primary wobble-horizontal-bottom "
              )}
            >
              {route.name}
            </Link>
          </li>
        ))}
        <Link
          onClick={() => setShowMenu && setShowMenu(false)}
          href="/cart"
          className={cn(
            baseClass,
            pathName === "/cart" &&
              "text-primary before:w-full before:bg-primary "
          )}
        >
          <Image
            src={cart}
            alt="cart"
            className="text-primary w-[5rem] ml-8 wobble-horizontal-bottom "
          />
        </Link>
      </ul>
    </div>
  );
};
