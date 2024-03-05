import { Logo, cart } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "./main-menu";
interface NavbarProps {
  showMenu?: boolean;
  onClose?: () => void;
}

export const Navbar = ({ showMenu, onClose }: NavbarProps) => {
  return (
    <nav className="fixed flex items-center justify-around  w-full z-10 blury text-secondary">
      <div className="relative z-20 py-10 ">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            priority
            className="h-[20rem] w-[20rem] fixed top-0  "
          />
        </Link>
      </div>
      <MainMenu />

      {/* <a href="/">Menu</a>
      <a href="/create">Order Now</a>
      <a href="/create">Catering</a>
      <Image src={cart} alt="cart"className="" /> */}
    </nav>
  );
};
