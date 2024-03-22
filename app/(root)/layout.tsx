"use client";

import { ButtonNavbar } from "@/components/shared/button-navbar";
import { Logo } from "@/components/ui/logo";
import { NewDrawerMenu } from "@/components/ui/new-drawer-menu";
import { ReactNode, useState } from "react";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Logo showMenu={showMenu} className="z-50" />
      <ButtonNavbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        className="z-70"
      />
      {showMenu && <NewDrawerMenu className="z-60" />}
      {children}
    </div>
  );
};

export default MainLayout;
