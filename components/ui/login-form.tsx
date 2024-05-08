import { providers } from "@/assets/constants";
import { cn } from "@/utils/utils";
import { LoginInputs } from "./loginputs";

interface LoginFormProps {
  title: string;
  signinup: string;
  showlogin: boolean;
  className?: string;
}

export const LoginForm = ({
  title,
  signinup,
  showlogin,
  className,
}: LoginFormProps) => {
  return (
    <div
      className={cn(
        "text-center flex flex-col  items-center justify-center h-full w-full",
        className
      )}
    >
      <h2 className="text-[3.5rem] text-black font-bold">{title}</h2>
      <p className="text-gray-500 my-2">{signinup} using social networks</p>
      <ul className="flex flex-row items-center justify-center gap-5 p-3">
        {providers.map((providers) => {
          const IconComponent = providers.provider;
          return (
            <li key={providers.color} className="rounded-full bg-primary p-2">
              <IconComponent size={30} className="fill-vainilla" />
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
      <LoginInputs />
    </div>
  );
};
