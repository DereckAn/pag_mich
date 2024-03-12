import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DrawerMenu } from "../ui/drawer-menu";
import { MainMenu } from "./main-menu";

export const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 blury h-[90px] flex ">
        <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
          <section>
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="logo"
                priority
                className="h-[20rem] w-[20rem] fixed top-0  "
              />
            </Link>
          </section>
          <section>
            <MainMenu drawerMenu={showMenu} setDrawerMenu={setShowMenu} />
          </section>
        </div>
      </header>
      {showMenu && <DrawerMenu showMenu={showMenu} />}
    </>
  );
};
