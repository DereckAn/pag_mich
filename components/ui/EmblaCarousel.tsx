import { NextButton, PrevButton } from "./EmblaCarouselArrowButtons";

interface PropTypeProps {
  slides: number[];
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  emblaRef: any;
}

const EmblaCarousel = ({
  slides,
  prevBtnDisabled,
  nextBtnDisabled,
  onNextButtonClick,
  onPrevButtonClick,
  emblaRef,
}: PropTypeProps) => {
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default EmblaCarousel;
