"use client";

import { FooterX } from "@/components/shared/footern";
import { Navbar } from "@/components/shared/navbar";
import { NavbarMobile } from "@/components/shared/navbar-mobile";
import { store } from "@/data";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <NavbarMobile />
      <Navbar />
      <div className="mt-20 pt-[0.1px]  md:mt-0">{children}</div>
      <FooterX />
    </Provider>
  );
};

export default MainLayout;
