import { detailsCatering } from "@/assets/constants";
import { Buttons } from "@/components/ui/buttons";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import Image from "next/image";

export const DetailsCatering = () => {
  return (
    <Container>
      <Title title="Details de catering" />
      <div className="w-full details_catering padding-auto ">
        {detailsCatering.map((item) => (
          <div
            key={item.text}
            className=" flex flex-col items-center justify-center p-5 w-full "
          >
            <div className="basis-1/2">
              <Image src={item.image} alt="img" className="object-cover w-36" />
            </div>
            <div className="basis-1/2">
              <p className="text-center text-2xl font-bold max-w-sm mt-10">
                {item.text}
              </p>
              <p className="text-center max-w-sm">{item.text2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <Buttons
          href="/catering"
          className="uppercase bg-primary text-vainilla"
          text="Order Delivery"
        />
      </div>
    </Container>
  );
};
