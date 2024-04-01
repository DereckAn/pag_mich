import { comida11 } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const MenuHighlightCatering = () => {
  return (
    <div className="basis-2/3 bg-slate-600 border-2 rounded-3xl h-[20vw] flex items-center justify-between my-3 px-[1vw]">
      <div className="flex flex-col w-[30%] border-2 h-[18vw] ">
        <h2 className="text-2xl">MEAL COMBINATIONS</h2>
        <p className="text-lg">
          Bundles designed to create the perfect combination for any occasion.
        </p>
        <Link href="/"> View Menu </Link>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <Image
        src={comida11}
        alt="comida11"
        className="basis-2/3 h-[18vw] object-cover rounded-2xl"
      />
    </div>
  );
};
