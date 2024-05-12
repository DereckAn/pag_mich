"use client";
import { ReactNode, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { ButtonIcon } from "./components/button-icon";
import { SidebarMenu } from "./components/sidebar-cart";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      <SidebarMenu showMenu={showMenu} onclose={() => setShowMenu(false)} />
      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed left-0 top-0 z-30 bg-primary p-4  rounded-tl-lg"
      />
      {children}
    </div>
  );
};

export default MainLayout;
