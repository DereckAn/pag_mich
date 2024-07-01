import { StaticImageData } from "next/image";
import Image from "next/image";
interface PropTypeProps {
  slides: StaticImageData[];
  emblaRef: any;
}

const EmblaCarousel = ({ slides, emblaRef }: PropTypeProps) => {
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((ima, index) => (
            <div className="embla__slide" key={ima.src + index}>
              <Image
                src={ima}
                alt="imagen"
                className="w-full h-full object-cover rounded-3xl hidden lg:block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
