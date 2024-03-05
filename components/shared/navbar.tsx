import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "./main-menu";
interface NavbarProps {
  showMenu?: boolean;
  onClose?: () => void;
}

export const Navbar = ({ showMenu, onClose }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 blury ">
      <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
        <section>
          <Link href="/" className="">
            <Image
              src={Logo}
              alt="logo"
              priority
              className="h-[20rem] w-[20rem] fixed top-0  "
            />
          </Link>
        </section>
        <section>
          <MainMenu />
        </section>
      </div>
    </header>
  );
};
