import { cateringMenu } from "@/assets/constants";
import { Container } from "@/components/ui/container";
import { MenuHighlightCatering } from "@/components/ui/menu-highlight-catering";
import { Title } from "@/components/ui/title";

export const CateringMenu = () => {
  return (
    <Container>
      <Title title="Catering Menu" />
      <div className="flex flex-wrap w-full items-center justify-center ">
        {cateringMenu.map((item, index) => (
          <MenuHighlightCatering
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            lista={item.lista}
            link={item.link}
          />
        ))}
      </div>
    </Container>
  );
};
