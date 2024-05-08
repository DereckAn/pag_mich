"use client";
import { providers } from "@/assets/constants";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <main className="h-screen w-full">
      <div className="text-center flex flex-col  items-center justify-center h-full">
        <h2 className="text-[3.5rem] text-black font-bold">
          Login to Your Account
        </h2>
        <p className="text-gray-500 my-2">Login using social networks</p>
        <ul className="flex flex-row items-center justify-center gap-5 p-3">
          {providers.map((providers) => {
            const IconComponent = providers.provider;
            return (
              <li key={providers.color} className="rounded-full bg-primary p-2">
                <IconComponent size={40} className="fill-vainilla" />
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row text-center">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <input
            type="text"
            placeholder="Email"
            className="rounded-full p-[16px] w-[460px] focus:bg-vainilla focus:border-none focus:outline-none focus:ring focus:ring-primary"
          />
          <input
          
            type="password"
            placeholder="Password"
            className="rounded-full p-[16px] w-[460px] focus:bg-vainilla focus:border-none focus:outline-none focus:ring focus:ring-primary"
          />
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
