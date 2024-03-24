import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainMenu } from "./main-menu";

export const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  return (
      <header className=" header fixed top-0 left-0 w-full z-50 mt-[2.5vw] pointer-events-none">
        <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
          <section>
            {!showMenu && (
              <Link href="/" className="">
                <Image
                  src={logo}
                  alt="logo"
                  priority
                  className="h-[20rem] w-[20rem] fixed top-0  "
                />
              </Link>
            )}
          </section>
          <section>
            <MainMenu drawerMenu={showMenu} setDrawerMenu={setShowMenu} />
          </section>
        </div>
      </header>
  );
};
