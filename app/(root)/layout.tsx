"use client";

import { FooterX } from "@/components/shared/footern";
import { Navbar } from "@/components/shared/navbar";
import { NavbarMobile } from "@/components/shared/navbar-mobile";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavbarMobile />
      <Navbar />
      <div className="mt-20 pt-[0.1px]  md:mt-0">{children}</div>
      <FooterX />
    </div>
  );
};

export default MainLayout;
