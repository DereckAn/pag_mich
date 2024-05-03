import { cerdo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const SliderBeverages = () => {
  return (
    <section className="w-full h-screen overflow-hidden">
      <ul>
        <div className="item absolute w-full h-screen ">
          <div className="rounded-full w-[45vw] h-[45vw] absolute -left-[20%] top-0 bottom-0 m-auto">
            <Image src={cerdo} alt="Bebida 1" className="rounded-full w-ful h-full object-cover"/>
          </div>
          <div className="content">
            <h3>Nombre de la bebida</h3>
            <p>Descripción de la bebida</p>
            <Link href="/"> Buy now </Link>
          </div>
        </div>
      </ul>
    </section>
  );
};
