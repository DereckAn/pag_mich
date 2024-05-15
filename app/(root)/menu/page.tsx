'use client';

import { products } from "@/assets/dummydb";
import { ListaCardsMenu } from "@/components/ui/menu/list-cards-menu";
import { NavMenuSection } from "../sections/menu-section";
import { useState } from "react";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <main className="min-h-screen relative lg:pr-[20vw] md:pr-[30vw] xl:pr-[16vw] xxl:pr-[20vw]  xl:-px-0 ">
      <NavMenuSection select={()=>{setSelectedMenu}}/>
      <ListaCardsMenu
        products={products[0].milkshakes}
        titulo={" Super Milshakes"}
      />
    </main>
  );
}; 

export default Menu;
