"use server";

import { detailsCatering } from "@/assets/constants";
import { Container } from "@/components/ui/container";
import { LinkPro } from "@/components/ui/link-pro";
import { Title } from "@/components/ui/title";
import Image from "next/image";

export const DetailsCatering = () => {
  return (
    <Container className="max-w-full">
      <Title title="Details de catering" />
      <div className={`w-full flex flex-wrap items-center justify-center`}>
        {detailsCatering.map((item) => (
          <div
            key={item.text}
            className=" flex flex-col items-center justify-center p-5 h-[350px] w-[400px]"
          >
            <div className="basis-1/2 relative">
              <Image src={item.image} alt="img" className="object-cover w-36" />
            </div>
            <div className="basis-1/2 relative border-b-2 border-primary md:border-none">
              <p className="text-center text-2xl font-bold max-w-sm mt-10">
                {item.text}
              </p>
              <p className="text-center max-w-sm">{item.text2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <LinkPro
          href="/catering"
          className="uppercase bg-primary text-vainilla"
          text="Order Delivery"
        />
      </div>
    </Container>
  );
};
