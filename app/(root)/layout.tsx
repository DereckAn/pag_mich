"use client";

import { Navbar } from "@/components/shared/navbar";
import { ReactNode, useState } from "react";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* // note: showMenu y setShowMenu es para las sfuncionalidades del boton  */}
      {/* <Sidebar showMenu={showMenu} onclose={() => setShowMenu(false)} /> */}
      {/* // note: ponemos el boton aqui para que se vea en todas las paginas */}
      {/* <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed right-0 bottom-0 z-30 bg-primary p-4  rounded-tl-lg"
      /> */}
      <Navbar  />

      {children}
      <div>hola</div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
