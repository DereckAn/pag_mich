import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonNavbar } from "./button-navbar";

export const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header className=" header fixed top-0 left-0 w-full z-50 mt-[2.5vw] pointer-events-none navbarsettings">
      <div className="flex items-center justify-between">
        <Link
          className="block relative z-50 ml-[5%] sm:ml-[7.5%] pointer-events-auto  "
          href={"/"}
          onClick={toggleShowMenu}
        >
          <Image src={logo} alt="logo" />
        </Link>
        <ButtonNavbar showMenu={showMenu} setShowMenu={toggleShowMenu} />
      </div>
    </header>
  );
};
