"use client";

import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { ReactNode } from "react";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
