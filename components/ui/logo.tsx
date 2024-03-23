import { logo } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
interface LogoProps {
  showMenu: boolean;
  className?: string;
  setShowMenu?: (showMenu: boolean) => void;
}

export const Logo = ({ showMenu, className, setShowMenu }: LogoProps) => {
  return (
    <Link href="/" className="">
      <section
        className={cn(
          "fixed top-14 left-36 flex items-center justify-center",
          className
        )}
        onClick={() => setShowMenu && setShowMenu(false)}
      >
        <Image
          src={logo}
          alt="logo"
          priority
          className={cn(
            "h-[100px] w-[100px] object-cover  transform scale-150 ",
            showMenu ? "rotate-center " : "navbarsettings "
          )}
        />
      </section>
    </Link>
  );
};
