import { products } from "@/assets/dummydb";
import { ListaCardsMenu } from "@/components/ui/menu/list-cards-menu";
import NavbarMenu from "./components/navbar-menu";

const Menu = () => {
  return (
    <main className="min-h-screen relative lg:pr-[23vw] xl:pr-[20vw] xxl:pr-[16vw]  px-5 xl:-px-0 ">
      <NavbarMenu />
      <ListaCardsMenu
        products={products[0].milkshakes}
        titulo={" Super Milshakes"}
      />
    </main>
  );
};

export default Menu;
