"use client";
import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const Part1Catering = () => {
  return (
    <div className="w-[30vw] border-lime-500 border-4 rounded-3xl">
      <div className="border-4 p-5 rounded-3xl">
        <div className="  flex items-center justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <button
            className="px-5 py-2 bg-primary rounded-3xl"
            onClick={() => {}}
          >
            {" "}
            Get in Touch{" "}
          </button>
        </div>
        <h1 className="text-black text-7xl font-semibold rounded-3xl py-10">
          At Protein House, we pride ourselves on providing exceptional culinary
          experiences that take your celebrations to the next level.
        </h1>
        <div className="flex gap-5">
          <button
            className=" text-white rounded-3xl px-5 py-2 bg-primary"
            onClick={() => {}}
          >
            Order Carside Pickup
          </button>
          <button
            className=" text-black rounded-3xl px-5 py-2 border-2 border-primary"
            onClick={() => {}}
          >
            Order Delivery
          </button>
        </div>

        <div className="border-4 mt-10">
          <p className="text-black text-lg  rounded-3xl py-7">
            Delight your taste buds with our exquisite catering services.
            catering services. At Protein House, we create artistic dishes made
            with fresh ingredients and refined techniques that will captivate
            your senses. that will captivate your senses. We offer custom
            catering for all types of events events, providing a memorable and
            unforgettable gastronomic experience. unforgettable dining
            experience.
          </p>
          <div className="flex gap-5 text-black ">
            <button onClick={() => {}} className="subrayado">
              {" "}
              How it works
            </button>
            <button onClick={() => {}} className="subrayado">
              {" "}
              About us
            </button>
            <button onClick={() => {}} className="subrayado">
              {" "}
              FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
