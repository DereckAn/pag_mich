import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ArrowsProps {
  handlePrev: () => void;
  handleNext: () => void;
}

export const ArrowsLR = ({ handleNext, handlePrev }: ArrowsProps) => {
  const commonClasses = `bg-primary rounded-full hover:bg-yellow-200 w-16 h-16 flex items-center 
                         justify-center text-lg transition duration-500  text-vainilla hover:text-primary
                         `;

  return (
    <div className="absolute bottom-[20%] left-[45%] flex items-center gap-10 z-10">
      <button onClick={handlePrev} className={`${commonClasses} `}>
        <IoIosArrowBack size={40} className=" "/>
      </button>
      <button onClick={handleNext} className={`${commonClasses}`}>
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
};
