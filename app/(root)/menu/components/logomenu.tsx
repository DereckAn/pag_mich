import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const LogoMenu = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className="w-20 h-20"></Image>
    </Link>
  );
};
