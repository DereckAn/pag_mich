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
  return (
    <button
      type="button"
      className={cn(
        "border-2 border-primary py-4 px-8 rounded-full flex flex-row gap-4 items-center justify-center text-xl ",
        className
      )}
    >
      {ima && <Image src={image} alt={text} width={50} height={50} />}
      {text}
    </button>
  );
};
