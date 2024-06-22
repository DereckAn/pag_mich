"use client";

import { products2 } from "@/assets/dummydb";
import menucss from "@/styles/menu-styles.module.css";
import { Products } from "@/types";
import { useCallback, useEffect , useState } from "react";
import { CardMenu } from "./components/card-menu";
import Categories  from "./components/categories";
import { DialogDetailsItem } from "./components/dialog-details-item";

const Menu = () => {
  const [activeCard, setActiveCard] = useState<Products>();

  const closeDialog = () => {
    setActiveCard(undefined);
  };

  useEffect(() => {
    const body = document.body;
    if (activeCard) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
    // Cleanup function to remove the class when the component unmounts
    return () => body.classList.remove("no-scroll");
  }, [activeCard]);

  const handleCardClick = useCallback((item: Products) => {
    setActiveCard(item);
  }, []);

  return (
    <>
      {activeCard && (
        <DialogDetailsItem activeCard={activeCard} closeDialog={closeDialog} />
      )}

      <div className={`flex items-center gap-5 mt-5 px-5`}>
        <Categories />
        <div className="relative w-1/4">
          <i className="fi fi-rr-search absolute left-4 top-4 text-primary " />
          <input
            type="text"
            className="h-[58px] pl-12 pr-4 rounded-full outline-none  w-full "
            placeholder="Search"
          />
        </div>
      </div>
      <menu className={`${menucss.menu_card_list}`}>
        {products2.map((item) => (
          <button
            onClick={() => handleCardClick(item)}
            key={item.name}
            className="text-start"
          >
            <CardMenu product={item} />
          </button>
        ))}
      </menu>
    </>
  );
};

export default Menu;
