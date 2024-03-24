import { cn } from "@/utils/utils";

interface TresLineasProps {
  showMenu: boolean;
}

export const TresLineas = ({ showMenu }: TresLineasProps) => {
  return (
    <>
      <span
        className={cn(
          "bg-black absolute h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
          showMenu ? "topb" : "top-span"
        )}
      />
      <span
        className={cn(
          "bg-black absolute h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
          showMenu ? "middleb" : "middle-span"
        )}
      />
      <span
        className={cn(
          "bg-black absolute h-1 w-8 transition-all duration-300 ease-in-out rounded-full",
          showMenu ? "bottomb" : "bottom-span"
        )}
      />
    </>
  );
};
