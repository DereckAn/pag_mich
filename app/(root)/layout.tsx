"use client";

import { Navbar } from "@/components/shared/navbar";
import { ReactNode, useState } from "react";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
