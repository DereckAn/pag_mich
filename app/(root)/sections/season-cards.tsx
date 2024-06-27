import { orderCards } from "@/assets/constants";
import { OrderCard } from "@/components/ui/order-card";
export const SeassonCards = () => {
  return (
    <div className="flex flex-wrap items-center justify-center  gap-10 py-20">
      {orderCards.map((card) => (
        <OrderCard
          key={card.title}
          title={card.title}
          text={card.text}
          image={card.image}
          href={card.href}
        />
      ))}
    </div>
  );
};
