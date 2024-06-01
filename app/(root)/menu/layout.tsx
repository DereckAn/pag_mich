"use client";
import { ReactNode, useState } from "react";
import { HeaderMenu } from "./components/header";
import { MiniCart } from "./components/minicart";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-[100dvh] text-primary">
      <section className="bg-red-100 h-[10dvh] py-4 px-5 w-full flex items-center">
        <HeaderMenu />
      </section>
      <section className="h-[90dvh] lg:flex lg:gap-x-4">
        <main className="bg-green-100 basis-4/4 lg:basis-3/4 p-5 lg:pr-1 overflow-y-auto relative">
          {children}
        </main>
        <div className="bg-blue-100 xl:basis-1/4 p-5 lg:pl-0">
          <MiniCart />
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
