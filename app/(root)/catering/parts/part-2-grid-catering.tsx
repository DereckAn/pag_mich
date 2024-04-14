import { comida1 } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
interface Part2GridCateringProps {
  classname?: string;
}

export const  Part2GridCatering = ({classname}: Part2GridCateringProps) => {
  return (
    <div className={cn("  grid grid-rows-3 grid-cols-3 gap-5 ", classname)}>
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl  col-start-1 col-end-3 row-start-1 row-end-3"
      />
      <div className="space-y-5">
        <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover "
      />
      <Image
        src={comida1} 
        alt="catering"
        className="rounded-3xl object-cover "
      />
      </div>
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover row-start-3 "
      />
      <Image
        src={comida1}
        alt="catering"
        id="ultima"
        className="rounded-3xl object-cover  col-start-2  col-span-2 w-[100%] h-[100%] " 
      />
    </div>
  );
};
