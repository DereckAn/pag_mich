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
      <header className=" fixed top-0 w-full h-[80px]  flex items-center justify-between px-10 my-10 ">
        <section>
          <Link href="/" className="">
            <Image
              src={Logo}
              alt="logo"
              priority
              className={cn(
                "h-[100px] w-[100px] object-cover  transform scale-150",
                showMenu ? "" : "navbarsettings"
              )}
            />
          </Link>
        </section>
        <section className="flex items-center justify-center group">
          <div
            id="expandale"
            className={cn(
              "absolute rounded-full bg-red-400  transition-all duration-700 cubic-bezier(.11,.99,.68,.93) ",
              showMenu
                ? "w-screen h-screen rounded-none"
                : "w-[80px] h-[80px] navbarsettings"
            )}
            style={{ transform: showMenu ? "scale(3)" : "scale(1)" }}
          ></div>
          <button
            className={cn(
              "relative rounded-full w-[80px] h-[80px] z-20  bg-white flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out",
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
      {showMenu && <NewDrawerMenu className="inset-0 z-10" />}
    </>
  );
};
