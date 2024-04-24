import { fruits } from "@/assets";
import { Container } from "@/components/ui/container";
import { OrderCard } from "@/components/ui/order-card";
import { Title } from "@/components/ui/title";
import Order from "@/styles/order-styles.module.css";
import Image from "next/image";
import Link from "next/link";

const OrderNow = () => {
  return (
    <main className="">
      <Title title="Order Now" className="text-black" />
      <Container className="bg-white flex justify-center items-center flex-row">
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>

      </Container>
    </main>
  );
};

export default OrderNow;
