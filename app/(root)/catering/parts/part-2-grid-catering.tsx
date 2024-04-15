import { comida1 } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import "@/styles/catering-styles.css";

interface Part2GridCateringProps {
  classname?: string;
}

export const Part2GridCatering = ({ classname }: Part2GridCateringProps) => {
  return (
    <div className={cn("gridcatering gap-5   ", classname)}>
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl  col-start-1 col-end-3 row-start-1 row-end-3 w-[100%] h-[100%]"
      />
      <div className="cristalblur rounded-3xl ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        repellat cupiditate? Accusamus delectus repellendus sapiente
        necessitatibus perspiciatis dolorum fugit quasi vitae facilis totam
        magnam id tenetur, sunt cupiditate nobis suscipit?
      </div>
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover  "
      />
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover hidden 2xl:block  "
      />
      <div className="cristalblur rounded-3xl col-span-2 hidden 2xl:block">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        repellat cupiditate? Accusamus delectus repellendus sapiente
        necessitatibus perspiciatis dolorum fugit quasi vitae facilis totam
        magnam id tenetur, sunt cupiditate nobis suscipit?
      </div>
    </div>
  );
};

//note: if your are using taildwindcss using grid is going to be harderd.
