import { drinkSliderType } from "@/types";

interface TextSliderProps {
    className?: string
    item?: drinkSliderType;
}
export const TextSlider = ({className, item}: TextSliderProps) => {
    return ( 
        <div className="cicular_text_slider cristalblur">
            <h1 className="text-center text-white text-4xl font-bold">Your Cart</h1>
        </div>
    );
}