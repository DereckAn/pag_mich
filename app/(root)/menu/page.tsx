import { comida1 } from "@/assets";
import { CardMenu } from "@/components/ui/menu/card-menu";
import { CardMenu2 } from "@/components/ui/menu/card-menu2";
import { CardMenu3 } from "@/components/ui/menu/card-menu3";

const Menu = () => {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      {/* <SliderBeverages /> */}
      <CardMenu
        stars={4}
        image={comida1}
        price={20.01}
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco mmodo."
        title="Bento Ekiben Makunouchi Packed "
      />

      <CardMenu2
        stars={4}
        image={comida1}
        price={20.01}
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco mmodo."
        title="Bento Ekiben Makunouchi Packed "
      />

      <CardMenu3 
        stars={4}
        image={comida1}
        price={20.01}
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco mmodo."
        title="Bento Ekiben Makunouchi Packed "
      />
    </main>
  );
};

export default Menu;
