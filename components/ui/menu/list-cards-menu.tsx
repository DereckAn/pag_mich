import lista from "@/styles/menu-styles.module.css";
import { CardMenu } from "./card-menu";

interface ListaCardsMenuProps {
  products: any;
  titulo: string;
}

export const ListaCardsMenu = ({ products, titulo }: ListaCardsMenuProps) => {
  return (
    <>
      <h1 className="text-6xl text-center relative p-10 text-primary font-bold ">
        {titulo}
      </h1>
      <div className={` relative my-10 mx-auto ${lista.menu} p-5`}>
        {products.map((product: any) => (
          <CardMenu
            key={product.id}
            stars={product.stars}
            image={product.image}
            price={product.price}
            description={product.description}
            title={product.title}
          />
        ))}
      </div>
    </>
  );
};
