"use client";
import { comida11 } from "@/assets";
import { navmenu } from "@/assets/constants";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LogoMenu } from "./logomenu";
import MenuMobile from "./menu-mobile";

export const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <header className="flex items-center justify-between w-full">
        <section>
          <LogoMenu />
        </section>
        <section className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-x-1 p-1 rounded-full bg-white">
              {navmenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={cn(
                      "flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors",
                      item.path === "/menu"
                        ? "bg-primary text-white"
                        : "text-primary"
                    )}
                  >
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section>
          <ul className="flex items-center gap-x-3 bg-white p-3 rounded-full">
            <li className="flex items-center gap-x-2">
              <Image
                src={comida11}
                alt="Image"
                width={100}
                height={100}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h5 className="font-medium">Antonella</h5>
            </li>
            <li>
              <button
                type="button"
                className="bg-gray-100 text-xl w-10 h-10 flex items-center justify-center rounded-full"
              >
                <i className="fi fi-rr-settings"></i>
              </button>
            </li>
            <li className=" lg:hidden">
              <button
                type="button"
                onClick={() => setShowMenu(true)}
                className="bg-gray-100 text-xl w-10 h-10 flex items-center justify-center rounded-full"
              >
                <i className="fi fi-rr-bars-staggered"></i>
              </button>
            </li>
          </ul>
        </section>
      </header>
      <MenuMobile isOpen={showMenu} onClose={setShowMenu} />
    </>
  );
};
