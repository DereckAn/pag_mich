import { socials } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { MapMenu } from "../ui/map-menu";
import { TresLineas } from "../ui/tres-lineas";

interface ButtonNavbarProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const ButtonNavbar = ({ showMenu, setShowMenu }: ButtonNavbarProps) => {
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
            <MapMenu setShowMenu={setShowMenu} />
          </div>
          <div className="flex-grow basis-0 flex items-end">
            <div className="bg-black w-10 basis-1/2"> h</div>

            <div className="flex border-2 gap-5">
              {socials.map((social) => (
                <a
                  href={social.url}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className="w-[50px] "
                  />
                </a>
              ))}
            </div>
            <div className="bg-black w-10 basis-1/2"> h</div>

          </div>
        </div>
      )}
    </nav>
  );
};
