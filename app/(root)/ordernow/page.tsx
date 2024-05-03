import { orderCards } from "@/assets/constants";
import { Container } from "@/components/ui/container";
import { OrderCard } from "@/components/ui/order-card";
import { Title } from "@/components/ui/title";

const OrderNow = () => {
  return (
    <main className="p-[.1px]">
      <Title title="Order Now" className="text-black mt-16" />
      <Container className=" flex justify-center items-center flex-row">
        {orderCards.map((card) => (
          <OrderCard
            key={card.title}
            title={card.title}
            text={card.text}
            image={card.image}
            href={card.href}
          />
        ))}
      </Container>
    </main>
  );
};

export default OrderNow;
