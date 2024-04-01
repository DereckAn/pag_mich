import { cateringSection } from "@/assets/constants";
import { OccationCatering } from "@/components/ui/occation-catering";

export const OccasionSection = () => {
  return (
    <section className="flex items-center flex-col justify-around w-full text-black bg-red-300">
      <h2 className="text-3xl py-6 font-extrabold text-center">
        PERFECT FOR ANY OCCASION
      </h2>
      <div className="flex  flex-wrap w-full items-star justify-center">
        {cateringSection.map((item) => (
          <OccationCatering
            key={item.title}
            title={item.title}
            text={item.text}
            image={item.image}
            lista={item.lista}
          />
        ))}
      </div>
    </section>
  );
};
