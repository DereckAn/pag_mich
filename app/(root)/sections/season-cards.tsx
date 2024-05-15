import { orderCards } from "@/assets/constants";
import { Container } from "@/components/ui/container";
import { OrderCard } from "@/components/ui/order-card";
export const SeassonCards = () => {
  return (
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
  );
};

