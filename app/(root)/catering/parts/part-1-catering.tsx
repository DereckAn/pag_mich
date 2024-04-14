import { logo } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
interface Part1CateringProps {
  classname?: string;
}

export const Part1Catering = ({ classname }: Part1CateringProps) => {
  return (
    <div
      className={cn(
        " rounded-3xl bg-red-300 border-2 flex flex-col",
        classname
      )}
    >
      <div className="  flex items-center justify-between border-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <Link href={"/"} className="px-5 py-2 bg-primary rounded-3xl">
          {" "}
          Get in Touch{" "}
        </Link>
      </div>
      <h1 className="text-black h1size font-bold rounded-3xl py-10 border-2">
        At Protein House, we pride ourselves on providing exceptional culinary
        experiences that take your celebrations to the next level.
      </h1>
      <div className="flex gap-5 sm:flex-row flex-col border-2">
        <Link
          href={"/"}
          className=" text-white rounded-3xl px-5 py-2 bg-primary max-w-sm text-center"
        >
          Order Carside Pickup
        </Link>
        <Link
          href={"/"}
          className=" text-black rounded-3xl px-5 py-2 border-2 border-primary max-w-sm text-center"
        >
          Order Delivery
        </Link>
      </div>

      <div className=" border-2 ">
        <p className="text-black psize  rounded-3xl py-7">
          Delight your taste buds with our exquisite catering services. catering
          services. At Protein House, we create artistic dishes made with fresh
          ingredients and refined techniques that will captivate your senses.
          that will captivate your senses. We offer custom catering for all
          types of events events, providing a memorable and unforgettable
          gastronomic experience. unforgettable dining experience.
        </p>
        <div className="flex gap-5 text-black ">
          <Link href={"/"} className="subrayado">
            {" "}
            How it works
          </Link>
          <Link href={"/"} className="subrayado">
            {" "}
            About us
          </Link>
          <Link href={"/"} className="subrayado">
            {" "}
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};
