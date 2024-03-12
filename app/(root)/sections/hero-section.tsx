import { cerdo } from "@/assets";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="h-screen ">
      <Image
        src={cerdo}
        alt="cerdo"
        className="h-screen object-cover "
        priority
      />
    </div>
  );
};
