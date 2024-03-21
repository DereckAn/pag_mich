import { Logo } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NewDrawerMenu } from "../ui/new-drawer-menu";

export const ButtonNavbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className=" fixed top-0 w-full h-[80px]  flex items-center justify-between px-10 my-10 z-50 ">
        <section>
          <Link href="/" className="">
            <Image
              src={Logo}
              alt="logo"
              priority
              className="h-[100px] w-[100px] object-cover  transform scale-150 navbarsettings"
            />
          </Link>
        </section>
        <section>
          <button
            className="relative rounded-full w-[80px] h-[80px] navbarsettings bg-white flex justify-center items-center hover:scale-110 transition-all duration-300 ease-in-out "
            onClick={() => setShowMenu(!showMenu)}
          >
            <span
              className={cn(
                "bg-black absolute top-span h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
                showMenu ? "topb" : ""
              )}
            />
            <span
              className={cn(
                "bg-black absolute middle-span h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
                showMenu ? "middleb " : ""
              )}
            />
            <span
              className={cn(
                "bg-black absolute bottom-span h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
                showMenu ? "bottomb" : ""
              )}
            />
          </button>
        </section>
      </header>
      {showMenu && <NewDrawerMenu showMenu={showMenu} />}
    </>
  );
};
