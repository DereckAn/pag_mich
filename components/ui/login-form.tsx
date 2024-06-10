import { providers } from "@/assets/constants";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { cn } from "@/utils/utils";
import { signIn } from "next-auth/react";
import CreateInputs from "./createinputs";
import { LoginInputs } from "./loginputs";

interface LoginFormProps {
  showlogin: boolean;
  className?: string;
}

export const LoginForm = ({ showlogin, className }: LoginFormProps) => {

  const onclick = (provider: "google" | "twitter" | "github" | "instagram") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div
      className={cn(
        "text-center flex flex-col  items-center justify-center h-full w-full",
        className
      )}
    >
      <h2 className="text-[3.5rem] text-black font-bold">
        {showlogin ? "Login to Your Account" : "Create Free Account"}
      </h2>
      <p className="text-gray-500 my-2">
        {showlogin ? "Login" : "Sign up"} using social networks
      </p>
      <ul className="flex flex-row items-center justify-center gap-5 p-3">
        {providers.map((providers) => {
          return (
            <li key={providers.name}>
              <button className="w-[50px] h-[50px] "
                onClick={() => onclick(providers.name)}
              >
                <i className={providers.icon + " text-3xl text-primary"} />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row text-center relative ">
        <p
          className={`text-gray-400 text-[12px] bg-vainilla p-2
      after:block after:absolute after:h-[1px] after:bg-gray-300 after:w-[230px] after:right-0 after:top-[50%] after:-z-10 
      before:block before:absolute before:h-[1px] before:bg-gray-300 before:w-[230px] before:left-0 before:top-[50%] before:-z-10
      `}
        >
          OR
        </p>
      </div>
      {showlogin ? <LoginInputs /> : <CreateInputs />}
    </div>
  );
};
