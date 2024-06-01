"use client";

import { products2 } from "@/assets/dummydb";
import { CardProducts } from "./components/card-products";
import { Categories } from "./components/categories";

const Menu = () => {
  return (
    <div>
      <Categories />
      <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 mt-8  ">
        {products2.map((item) => (
          <li key={item.name}>
            <CardProducts product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
