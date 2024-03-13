import { Logo, cerdo } from "@/assets";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover object-cover flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${cerdo.src})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-5xl">Order Now</div>
      <Image src={Logo} alt="logo" className="w-[20rem]" />
    </div>
  );
};
