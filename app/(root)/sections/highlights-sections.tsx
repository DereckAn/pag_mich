import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import Highlight from "@/styles/sections-styles.module.css";

export const HighlightSection = () => {
  return (
    <Container>
      <Title title="Highlights" />
      <div className={`w-full h-[65vw] 2xl:h-[50vw] ${Highlight.highlights}`}>
        <div className={`bg-white w-full rounded-3xl ${Highlight.span_r_2 }`}></div>
        <div className={`bg-white w-full rounded-3xl`}></div>
        <div className={`bg-white w-full rounded-3xl`}></div>
        <div className={`bg-white w-full rounded-3xl ${Highlight.span_rc_2 }`}></div>
        <div className={`bg-white w-full rounded-3xl`}></div>
      </div>
    </Container>
  );
};
