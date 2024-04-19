import { CateringMenu } from "./sections-catering/catering-menu";
import { FrequentQuest } from "./sections-catering/fre-questions";
import { HeroGridSection } from "./sections-catering/hero-grid-section";
import { OccasionSection } from "./sections-catering/occasion-section";

const Catering = () => {
  return (
    <>
      <HeroGridSection />
      <OccasionSection />
      <CateringMenu />
      <FrequentQuest />
    </>
  );
};

export default Catering;
