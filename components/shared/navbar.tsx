import { Logo, cart } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
interface NavbarProps {
  showMenu?: boolean;
  onClose?: () => void;
}

export const Navbar = ({ showMenu, onClose }: NavbarProps) => {
  return (
    <nav className="fixed flex items-center justify-around  w-full z-10 blury">
      <div className="relative z-20 py-10 ">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            priority
            className="h-[20rem] w-[20rem] fixed left-20 top-0  bg-slate-600"
          />
        </Link>
      </div>
      <a href="/">Menu</a>
      <a href="/create">Order Now</a>
      <a href="/create">Catering</a>
      <Image src={cart} alt="cart" />
    </nav>
  );
};
