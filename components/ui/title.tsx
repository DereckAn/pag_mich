import { cn } from "@/utils/utils";

interface TitleProps {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: TitleProps) => {
  return (
    <h2 className={cn("text-4xl font-extrabold p-2 uppercase text-center ", className)}>
      {title}
    </h2>
  );
};
