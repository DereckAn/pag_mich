import { logo } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TresLineas } from "../ui/tres-lineas";

export const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <header className=" header fixed top-0 left-0 w-full z-50 mt-[2.5vw] pointer-events-none">
      <div className="flex items-center justify-between">
        <Link
          className="block relative z-50 ml-[5%] sm:ml-[7.5%] pointer-events-auto border-2 "
          href={"/"}
        >
          <Image src={logo} alt="logo" />
        </Link>
        <nav className="relative z-30 mr-[2.5%] pointer-events-auto text-[#0e0f15] opacity-100 border-2">
          <div className={cn("absolute buttonwh top-0 right-0 rounded-full bg-white visible transform-none")} />
          <button
            type="button"
            className={cn(
              " buttonwh relative z-20 flex items-center justify-center"
            )}
            onClick={() => setShowMenu(!showMenu)}
          >
            <TresLineas showMenu={showMenu} />
          </button>
        </nav>
      </div>
    </header>
  );
};
