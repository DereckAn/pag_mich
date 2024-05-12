import { logo } from "@/assets";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { MiniCart } from "./minicart";

interface SidebarMenuProps {
  showMenu?: boolean;
  onclose: () => void;
}
export const SidebarMenu = ({ showMenu, onclose }: SidebarMenuProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:right-0 bg-black border-l border-gray-500/30 w-[70vw] md:w-[30vw] lg:w-[20vw] xl:w-[16vw]  xxl:w-[20vw] h-full transition-all duration-300 ease-in-out -z-10",
          showMenu ? "right-0" : "-right-full"
        )}
      >
        <section className="p-8 border-b border-gray-500/30 flex">
          <Link href="/">
            <Image src={logo} width={100} height={100} alt="logo" />
          </Link>
          Protehin house
        </section>
        <section>
          <MiniCart />
        </section>
      </aside>
      <button
        onClick={onclose}
        className={cn(
          "fixed bg-black/20 z-40 left-0 top-0 w-full h-full lg:hidden ",
          showMenu ? "block" : "hidden"
        )}
      ></button>
    </>
  );
};
