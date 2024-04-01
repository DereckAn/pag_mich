import { CateringMenu } from "./sections-catering/catering-menu";
import { HeroSectionCatering } from "./sections-catering/hero-sections";
import { OccasionSection } from "./sections-catering/occasion-section";

const Catering = () => {
  return (
    <>
      <HeroSectionCatering />
      <OccasionSection />
      <CateringMenu />
    </>
  );
};

export default Catering;
