import { products } from "@/assets/dummydb";
import { CardMenu } from "@/components/ui/menu/card-menu";

const Menu = () => {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      {products[0].milkshakes?.map((product) => (
        <CardMenu
          key={product.id}
          stars={product.stars}
          image={product.image}
          price={product.price}
          description={product.description}
          title={product.title}
        />
      ))}
    </main>
  );
};

export default Menu;
