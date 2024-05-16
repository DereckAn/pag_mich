import { logo } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonNavbar } from "./button-navbar";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  const toggleShowMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <header className=" header fixed top-0 left-0 w-full z-50 mt-[2.5vw] pointer-events-none navbarsettings">
      <div className="flex items-center justify-between">
        <Link
          className={cn(
            "block relative z-50 ml-[5%] sm:ml-[7.5%] pointer-events-auto  ",
            showMenu && "opacityy"
          )}
          href={"/"}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Image src={logo} alt="logo" />
        </Link>
        <ButtonNavbar showMenu={showMenu} setShowMenu={toggleShowMenu} />
      </div>
    </header>
  );
};
