"use client";

import { products2 } from "@/assets/dummydb";
import { Categories } from "./components/categories";
import { CardProducts } from "./components/card-products";

const Menu = () => {
  // const [selectedMenu, setSelectedMenu] = useState("Super Milshakes");
  // const cards = products.find((item) => item.title === selectedMenu);

  return (
    <div>
      <Categories />
      <ul className="grid md:grid-cols-2 gap-5 mt-8 ">
        {products2.map((item) => (
          <li key={item.name}>
            <CardProducts product={item} />
          </li>
        ))}
      </ul>
    </div>
    // <main className="min-h-screen relative lg:pr-[20vw] md:pr-[30vw] xl:pr-[16vw] xxl:pr-[20vw]  xl:-px-0 ">
    //   <NavMenuSection select={setSelectedMenu} />
    //   <ListaCardsMenu
    //     products={cards?.products}
    //     titulo={cards?.title ?? "Default Title"}
    //   />
    // </main>
  );
};

export default Menu;
