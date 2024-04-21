'use server';

import { cateringSection } from "@/assets/constants";
import { Container } from "@/components/ui/container";
import { OccationCatering } from "@/components/ui/occation-catering";
import { Title } from "@/components/ui/title";

export const OccasionSection = () => {
  return (
    <Container className="mt-10">
      <Title title="Catering for every occasion" />
      <div className="flex lg:items-start items-center justify-center flex-wrap w-full ">
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
    </Container>
  );
};
