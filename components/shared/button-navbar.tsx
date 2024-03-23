import { cn } from "@/utils/utils";
interface ButtonNavbarProps {
  className?: string;
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const ButtonNavbar = ({
  showMenu,
  setShowMenu,
  className,
}: ButtonNavbarProps) => {
  return (
    <header
      className={cn(
        " fixed h-[80px] flex items-center justify-between top-14 right-14 ",
        className
      )}
    >
      <section className="flex items-center justify-center group">
        <div
          id="expandale"
          className={cn(
            "absolute rounded-full bg-blue-300 transition-all duration-700 cubic-bezier(.11,.99,.68,.93) ",
            showMenu
              ? "w-screen h-screen rounded-none"
              : "w-[80px] h-[80px] navbarsettings"
          )}
          style={{ transform: showMenu ? "scale(3)" : "scale(1)" }}
        ></div>
        <button
          className={cn(
            "relative rounded-full w-[80px] h-[80px] z-50  bg-white flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out",
            showMenu ? "bg-gray-300" : "navbarsettings"
          )}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span
            className={cn(
              "bg-black absolute h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
              showMenu ? "topb" : "top-span"
            )}
          />
          <span
            className={cn(
              "bg-black absolute h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
              showMenu ? "middleb" : "middle-span"
            )}
          />
          <span
            className={cn(
              "bg-black absolute h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
              showMenu ? "bottomb" : "bottom-span"
            )}
          />
        </button>
      </section>
    </header>
  );
};
