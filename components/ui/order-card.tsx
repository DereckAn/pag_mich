import Order from "@/styles/order-styles.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface OrderCardProps{
    title: string
    text:string
    image: StaticImageData
    href: string
}

export const OrderCard = ({title, text, image, href}: OrderCardProps) => {
  return (
    <Link  href={href} className="w-[20vw] h-[30vw] relative flex group rounded-3xl overflow-auto">
      <div
        className={`h-[70%] w-[150%] bg-primary z-10 group-hover:top-[-25%] group-hover:bg-yellow-500
    left-[-25%] transition-all duration-500 ease-in-out ${Order.order_card}
    flex justify-center `}
      ></div>
      <div className="absolute z-10 top-[87%] space-y-5  group-hover:top-[7%] left-0 right-0 p-auto text-center transition-all duration-500 ease-in-out">
        <p className="font-extrabold text-2xl text-vainilla group-hover:text-primary ">
          {title}
        </p>
        <p className="text-wrap hidden group-hover:block px-5">
          {text}
        </p>
      </div>
      <div className="absolute -z-0 w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={"Comida11"}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
    </Link>
  );
};

