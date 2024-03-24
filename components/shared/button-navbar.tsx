import { routes } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TresLineas } from "../ui/tres-lineas";

interface ButtonNavbarProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const ButtonNavbar = ({ showMenu, setShowMenu }: ButtonNavbarProps) => {
  const pathName = usePathname();

  return (
    <nav className="relative z-30 mr-[2.5%] pointer-events-auto opacity-100  group flex items-center justify-center">
      <div
        className={cn(
          "absolute   rounded-full bg-white visible  transition-all duration-700 ease-in-out  ",
          showMenu ? "w-screen h-screen rounded-none" : " buttonwh"
        )}
        style={{ transform: showMenu ? "scale(3)" : "scale(1)" }}
      />
      <button
        type="button"
        className={cn(
          " buttonwh bg-white relative z-20 flex items-center rounded-full justify-center group-hover:scale-110 transition-all duration-300 ease-in-out",
          showMenu ? "bg-gray-300" : ""
        )}
        onClick={() => setShowMenu(!showMenu)}
      >
        <TresLineas showMenu={showMenu} />
      </button>
      {showMenu && (
        <div className="fixed z-10 inset-0 font-bold flex flex-col">
          <div className="flex-grow basis-0" />
          <div className="flex-grow basis-0">
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
                      " subrayado text-8xl font-bold wobble-horizontal-bottom",
                      pathName === route.path &&
                        "text-primary before:w-full before:bg-primary  "
                    )}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-grow basis-0 flex items-end"></div>
        </div>
      )}
    </nav>
  );
};
