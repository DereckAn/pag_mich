import { ReactNode } from "react";
import { MiniCart } from "./components/minicart";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" text-primary ">
      <section className="h-[100dvh] xl:flex xl:gap-x-4">
        <main className=" xl:w-3/4 p-5 space-y-5 xl:pr-1 h-[100dvh] ">
          {children}
        </main>
        <div className="lg:basis-1/4 p-5 xl:pl-0">
          <MiniCart />
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
