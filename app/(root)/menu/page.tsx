"use client";

import { products } from "@/assets/dummydb";
import { ListaCardsMenu } from "@/components/ui/menu/list-cards-menu";
import { useState } from "react";
import { NavMenuSection } from "../sections/menu-section";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Super Milshakes");
  const cards = products.find((item) => item.title === selectedMenu);

  return (
    <main className="min-h-screen relative lg:pr-[20vw] md:pr-[30vw] xl:pr-[16vw] xxl:pr-[20vw]  xl:-px-0 ">
      <NavMenuSection select={setSelectedMenu} />
      <ListaCardsMenu
        products={cards?.products}
        titulo={cards?.title ?? "Default Title"}
      />
    </main>
  );
};

export default Menu;
