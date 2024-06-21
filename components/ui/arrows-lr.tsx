import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ArrowsProps {
  handlePrev: () => void;
  handleNext: () => void;
}

export const ArrowsLR = ({ handleNext, handlePrev }: ArrowsProps) => {
  const commonClasses = `bg-primary rounded-full hover:bg-yellow-200 flex items-center 
                         justify-center text-lg transition duration-500  text-vainilla hover:text-primary
                         w-10 h-10 min-[560px]:w-14 min-[560px]:h-14
                         `;

  return (
    <div className="flex justify-center items-center gap-8 sm:gap-10 z-100">
      <button onClick={handlePrev} className={`${commonClasses} `}>
        <IoIosArrowBack className="size-7 min-[560px]:size-8 " />
      </button>
      <button onClick={handleNext} className={`${commonClasses}`}>
        <IoIosArrowForward className="size-7 min-[560px]:size-8 " />
      </button>
    </div>
  );
};
