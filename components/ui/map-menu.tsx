import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MapMenuProps {
  setShowMenu: (showMenu: boolean) => void;
}

export const MapMenu = ({ setShowMenu }: MapMenuProps) => {
  const pathName = usePathname();
  return (
    <ul className="flex flex-wrap justify-center">
      {routes.map((route) => (
        <li
          key={route.path}
          className="flex-none w-full flex justify-center "
          style={{ padding: "0.7rem" }}
        >
          <Link
            onClick={() => setShowMenu && setShowMenu(false)}
            href={route.path}
            className={cn(
              " subrayado text-8xl font-bold wobble-horizontal-bottom text-center",
              pathName === route.path &&
                "text-primary before:w-full before:bg-primary  "
            )}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
