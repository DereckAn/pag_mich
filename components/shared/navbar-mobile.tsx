"use client";
import { comida11 } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LogoMenu } from "../../app/(root)/menu/components/logomenu";
import { MenuMobile } from "./menu-mobile";

export const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <>
      <header className=" header flex items-center justify-between w-full md:hidden fixed top-0 z-50 text-primary bg-vainilla px-5">
        <section>
          <LogoMenu />
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
                <i className="fi fi-br-menu-burger"></i>
              </button>
            </li>
          </ul>
        </section>
      </header>
      <MenuMobile isOpen={showMenu} onClose={setShowMenu} />
    </>
  );
};
