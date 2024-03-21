"use client";

import { ButtonNavbar } from "@/components/shared/button-navbar";
import { Navbar } from "@/components/shared/navbar";
import { ReactNode, useState } from "react";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* <Navbar /> */}
      <ButtonNavbar/>
      {children}
    </div>
  );
};

export default MainLayout;
