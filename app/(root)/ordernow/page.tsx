import { fruits } from "@/assets";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import Order from "@/styles/order-styles.module.css";
import Image from "next/image";

const OrderNow = () => {
  return (
    <main className="">
      <Title title="Order Now" className="text-black" />
      <Container className="bg-white flex justify-center items-center">
        <div className="w-[30vw] h-[40vw] relative flex group overflow-hidden rounded-3xl">
          <div
            className={`h-[70%] w-[150%] bg-primary z-10 group-hover:top-[-15%] group-hover:bg-yellow-500
          left-[-25%] transition-all duration-500 ease-in-out ${Order.order_card}
          flex justify-center `}
          >
            <div className="">
              <p className="font-extrabold text-2xl mt-20 text-vainilla group-hover:text-primary ">
                ORDER NOW
              </p>
              <p className="text-wrap hidden group-hover:block">
                ¡Saborea la vida, un bocado a la vez! Haz tu pedido ahora y
                disfruta de la delicia en tu puerta.
              </p>
            </div>
          </div>

          <div className="absolute -z-0 w-full h-full overflow-hidden">
            <Image
              src={fruits}
              alt={"Comida11"}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default OrderNow;
