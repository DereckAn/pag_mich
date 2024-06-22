import { ReactNode } from "react";
import { MiniCart } from "./components/minicart";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" text-primary ">
      <section className="h-[100dvh]">
        <main className=" space-y-5 h-[100dvh] relative">
          {children}
        </main>
          <MiniCart />
      </section>
    </div>
  );
};

export default MainLayout;
