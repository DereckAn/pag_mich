import { cn } from "@/utils/utils";
import { IconType } from "react-icons";

interface ButtonIconProps {
    icon: IconType;
    className?: string;
    onClick: () => void;
}

export const ButtonIcon = ({icon: Icon, className, onClick} : ButtonIconProps) => {
    return ( 
        <button type="button" className={cn("", className)} onClick={onClick}> 
        <Icon  size={20}/>
      </button>
     );
}
 