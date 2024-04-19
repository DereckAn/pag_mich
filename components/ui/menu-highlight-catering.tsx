import { comida11 } from "@/assets";
import "@/styles/catering-styles.css";
import Image from "next/image";
import Link from "next/link";

export const MenuHighlightCatering = () => {
  return (
    <div className="md:basis-2/3 cristalblur rounded-3xl sm:h-[300px] flex items-center justify-between p-3 my-3 flex-col-reverse sm:flex-row">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl">MEAL COMBINATIONS</h2>
          <p className="text-lg">
            Bundles designed to create the perfect combination for any occasion.
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
        <div className="border-2 ">
          <Link href="/" className="text-center border-2 p-4 px-5 py-2 rounded-3xl ">
            View Menu
          </Link>
        </div>
      </div>
      <Image
        src={comida11}
        alt="comida11"
        className="h-full object-cover rounded-2xl "
      />
    </div>
  );
};
