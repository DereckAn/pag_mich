import { cn } from "@/utils/utils";
import Arrows from '@/styles/catering-styles.module.css'

export const Arrow = () => {
  return (
    <div className="flex w-8 ">
      <div className="relative w-full ">
        <span
          className={cn(
            `bg-textcolor absolute h-1 w-4 transition-all duration-300 ease-in-out rounded-full left-[26%] ${Arrows.top_spanc}`
          )}
        />
        <span
          className={cn(
            `bg-textcolor absolute h-1 w-4 transition-all duration-300 ease-in-out rounded-full left-[0%] ${Arrows.bottom_spanc}`
          )}
        />
      </div>
    </div>
  );
};
