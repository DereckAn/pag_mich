import { socials } from "@/assets/constants";
import { cn } from "@/utils/utils";
import { MapMenu } from "../ui/map-menu";
import { TresLineas } from "../ui/tres-lineas";

interface ButtonNavbarProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

let colorIndex = 0;
export const ButtonNavbar = ({ showMenu, setShowMenu }: ButtonNavbarProps) => {
  const colores = [
    "#ff6961",
    "#77dd77",
    "#f8de7e",
    "#f988ff",
    "#84b6f4",
    "#fdcae1",
    "#ffa372",
    "#e5d2c4",
    "#b76f98"
  ];

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      colorIndex = (colorIndex + 1) % colores.length;
    }
  };

  return (
    <nav className="relative z-30 mr-[2.5%] pointer-events-auto opacity-100  group flex items-center justify-center  ">
      <div
        className={cn(
          "absolute   rounded-full  visible  transition-all duration-700 ease-in-out  ",
          showMenu ? "w-[100vw] h-[100vw] rounded-none" : " buttonwh"
        )}
        style={{
          transform: showMenu ? "scale(3)" : "scale(1)",
          backgroundColor: colores[colorIndex],
        }}
      />
      <button
        type="button"
        className={cn(
          " buttonwh bg-white relative z-20 flex items-center rounded-full justify-center group-hover:scale-110 transition-all duration-300 ease-in-out",
          showMenu ? "bg-gray-300" : ""
        )}
        onClick={handleButtonClick}
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

            <div className="flex gap-6 wobble-horizontal-bottom">
              {socials.map((social) => {
                return (
                  <a
                    href={social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon + " group-hover:text-primary text-5xl "} />
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
