import { drinkSliderType } from "@/types";
import { cn } from "@/utils/utils";

interface TextSliderProps {
  itemActivo: number;
  id: number;
  className?: string;
  item?: drinkSliderType;
}
export const TextSlider = ({
  itemActivo,
  id,
  className,
  item,
}: TextSliderProps) => {
  const { titulo, description } = item || {};
  return (
    <li
      className={cn(
        "cicular_text_slider cristalblur flex flex-col",
        itemActivo === id ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <h1 className="text-center text-white text-4xl font-bold">{titulo}</h1>
      <h4>{description}</h4>
    </li>
  );
};
