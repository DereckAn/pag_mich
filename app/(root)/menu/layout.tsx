"use client";
import { ReactNode, useState } from "react";
import { HeaderMenu } from "./components/header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-[100dvh] text-primary">
      <section className="bg-red-100 h-[10dvh] py-4 px-5 w-full flex items-center">
        <HeaderMenu />
      </section>
      <section className="h-[90dvh] lg:flex lg:gap-x-4">
        <main className="bg-green-100 basis-4/4 lg:basis-3/4 p-5 lg:pr-2 overflow-y-auto">{children}</main>
        <div className="bg-blule-100 lg:basis-1/4 p-5 lg:pl-2"> cart</div>
      </section>
    </div>
    // <div className="relative ">
    //   <SidebarMenu showMenu={showMenu} onclose={() => setShowMenu(false)} />
    //   <ButtonIcon
    //     icon={RiMenu2Line}
    //     onClick={() => setShowMenu(true)}
    //     className="lg:hidden fixed left-0 top-0 z-30 bg-primary p-4  rounded-tl-lg"
    //   /> 
    //   {children}
    // </div>
  );
};

export default MainLayout;
