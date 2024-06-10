"use server";

import { logo } from "@/assets";
import { LinkPro } from "@/components/ui/link-pro";
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
        " rounded-3xl cristalblur flex flex-col p-5 justify-around h-auto ",
        classname
      )}
    >
      <div className="  flex items-center justify-between ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <LinkPro href={"/"} text={"Get in Touch"} className="bg-primary" />
      </div>
      <h1 className="text-black h1size font-bold rounded-3xl py-10 ">
        At Protein House, we pride ourselves on providing exceptional culinary
        experiences that take your celebrations to the next level.
      </h1>
      <div className="flex gap-5 sm:flex-row flex-col 2xl:justify-start justify-center ">
        <LinkPro
          href={"/"}
          text={"Order Carside Pickup"}
          className="bg-primary max-w-sm text-center "
        />
        <LinkPro
          href={"/"}
          text={"Order Delivery"}
          className="border-2 border-primary max-w-sm text-center text-primary "
        />
      </div>

      <div className=" ">
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
            How it works
          </Link>
          <Link href={"/"} className="subrayado">
            About us
          </Link>
          <Link href={"/"} className="subrayado">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};
