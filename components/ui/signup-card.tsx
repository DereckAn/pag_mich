import { cn } from "@/utils/utils";

interface SignCardProps {
  title: string;
  description: string;
  butext: string;
  onclick: () => void;
  className?: string;
}
export const SignCard = ({
  title,
  description,
  onclick,
  butext,
  className,
}: SignCardProps) => {
  return (
    <div
      className={cn(
        " w-[45%] h-full bg-primary flex items-center justify-center flex-col text-center ",
        className
      )}
    >
      <h1 className="text-[48px] font-bold">{title}</h1>
      <p className="text-[30px] px-8 py-4">{description}</p>
      <button
        className="bg-vainilla text-primary p-4 rounded-full px-20 mt-2 font-bold"
        onClick={onclick}
      >
        {butext}
      </button>
    </div>
  );
};
