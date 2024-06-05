import { products2 } from "@/assets/dummydb";
import menucss from "@/styles/menu-styles.module.css";
import { CardProducts } from "./components/card-products";
import { Categories } from "./components/categories";

const Menu = () => {
  return (
    <>
      <Categories />
      <ul
        className={`grid grid-cols-2  gap-3 h-full ${menucss.menu_item_list}`}
      >
        {products2.map((item) => (
          <li key={item.name}>
            <CardProducts product={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
