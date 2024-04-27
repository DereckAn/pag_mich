import { socials } from "@/assets/constants";
import { cn } from "@/utils/utils";
import { MapMenu } from "../ui/map-menu";
import { TresLineas } from "../ui/tres-lineas";

interface ButtonNavbarProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const ButtonNavbar = ({ showMenu, setShowMenu }: ButtonNavbarProps) => {
  return (
    <nav className="relative z-30 mr-[2.5%] pointer-events-auto opacity-100  group flex items-center justify-center navbarsettings ">
      <div
        className={cn(
          "absolute   rounded-full bg-color_azul_perry visible  transition-all duration-700 ease-in-out  ",
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
            <div className="w-10 basis-1/2"> </div>

            <div className="flex gap-5">
              {socials.map((social) => {
                const IconComponent = social.iconComponent;
                return (
                  <a
                    href={social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={50} className="fill-primary" />
                  </a>
                );
              })}
            </div>
            <div className="w-10 basis-1/2"> </div>
          </div>
        </div>
      )}
    </nav>
  );
};
