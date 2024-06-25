import { useState } from 'react';
import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";

interface ButtonToppingsProps {
  image: StaticImageData;
  text: string;
  ima?: boolean;
  className?: string;
}

export const ButtonToppings = ({
  image,
  text,
  className,
  ima = true,
}: ButtonToppingsProps) => {
  // Estado para manejar si el checkbox está marcado
  const [isChecked, setIsChecked] = useState(false);

  // Función para manejar el cambio del checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="toppings" className={cn("custom-checkbox inline-block relative", className)}>
      <input
        type="checkbox"
        id="toppings"
        className="absolute top-0 left-0 w-full h-full m-0 p-0 cursor-pointer appearance-none"
        name="toppings"
        value={text}
        onChange={handleCheckboxChange}
      />
      <span
        className={cn(
          "py-3 px-8 rounded-full flex flex-row gap-4 items-center justify-center text-md md:text-xl cursor-pointer transition-all duration-300 ease-in-out",
          isChecked ? "border-2 border-primary" : "border-2 border-gray-300",
        )}
      >
        {ima && <Image src={image} alt={text} width={50} height={50} className='rounded'/>}
        {text}
      </span>
    </label>
  );
};