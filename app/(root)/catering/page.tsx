import { CateringMenu } from "./sections-catering/catering-menu";
import { HeroGridSection } from "./sections-catering/hero-grid-section";
import { OccasionSection } from "./sections-catering/occasion-section";

const Catering = () => {
  return (
    <>
      <HeroGridSection />
      <OccasionSection />
      <CateringMenu />
    </>
  );
};

export default Catering;
