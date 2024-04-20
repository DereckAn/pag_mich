import "@/styles/catering-styles.css";
import { cn } from "@/utils/utils";

export const Arrow = () => {
  return (
    <div className="flex w-10 ">
      <div className="relative w-full ">
        <span
          className={cn(
            "bg-textcolor absolute h-1 w-6 transition-all duration-300 ease-in-out rounded-full left-[40%] top-spanc",
            // showMenu ? "topbc" : "top-spanc"
          )}
        />
        <span
          className={cn(
            "bg-textcolor absolute h-1 w-6 transition-all duration-300 ease-in-out rounded-full left-[0%] bottom-spanc",
            // showMenu ? "bottombc" : "bottom-spanc"
          )}
        />
      </div>
    </div>
  );
};
