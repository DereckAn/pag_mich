import { comida11 } from "@/assets";
import "@/styles/catering-styles.css";
import Image from "next/image";
import { Buttons } from "./buttons";

export const MenuHighlightCatering = () => {
  return (
    <div className="w-full">
      <div className="text-black mx-auto cristalblur rounded-3xl sm:h-[350px] flex items-center justify-between p-3 my-3 flex-col-reverse sm:flex-row max-w-7xl">
        <div className="flex flex-col h-full justify-between px-5  ">
          <div>
            <h2 className="text-2xl mt-5">MEAL COMBINATIONS</h2>
            <p className="text-lg">
              Bundles designed to create the perfect combination for any
              occasion.
            </p>
            <ul>
              <li className="palomita">
                Choose from a variety of delicious meal combination options.
              </li>
              <li className="palomita">
                Each serves 8-14 people, starting at $13.75 per person.*
              </li>
            </ul>
          </div>
          <div className="my-5">
            <Buttons href="/" text="View Menu" className="bg-primary text-vainilla" />
          </div>
        </div>
        <Image
          src={comida11}
          alt="comida11"
          className="h-full object-cover rounded-2xl "
        />
      </div>
    </div>
  );
};
