"use client";
import { ReactNode, useState } from "react";
import { MiniCart } from "./components/minicart";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-[100dvh] text-primary">
      <section className="h-[100dvh] lg:flex lg:gap-x-4">
        <main className="basis-4/4 lg:basis-3/4 p-5 lg:pr-1 overflow-y-auto relative">
          {children}
        </main>
        <div className="xl:basis-1/4 p-5 lg:pl-0">
          <MiniCart />
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
