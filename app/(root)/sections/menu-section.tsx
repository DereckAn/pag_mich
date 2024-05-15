import { menuSection } from "@/assets/constants";

interface MenuSectionProps {
  showMenu?: boolean;
  select: () => string;
}

export const NavMenuSection = ({ showMenu, select }: MenuSectionProps) => {
  return (
    <nav className="w-full bg-primary h-36 flex items-center justify-center gap-16">
      {menuSection.map((item) => (
        <button onClick={() => select(item.)} key={item.name} className="">
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        </button>
      ))}
    </nav>
  );
};
