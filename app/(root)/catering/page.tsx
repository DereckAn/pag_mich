import { CateringMenu } from "./sections-catering/catering-menu";
import { HeroGridSection } from "./sections-catering/hero-grid-section";
import { HeroSectionCatering } from "./sections-catering/hero-sections";
import { OccasionSection } from "./sections-catering/occasion-section";

const Catering = () => {
  return (
    <>
      <HeroGridSection />
      {/* <HeroSectionCatering /> */}
      <OccasionSection />
      <CateringMenu />
    </>
  );
};

export default Catering;
