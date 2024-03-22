import { logo, cerdo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover object-cover flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${cerdo.src})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Link
        href={"/ordernow"}
        className="flex flex-col items-center justify-center"
      >
        {/* <div className="text-5xl text-primary">Order Now</div> */}
        <Image src={logo} alt="logo" className="w-[20rem] " />
      </Link>
    </div>
  );
};
