import { products } from "@/assets/dummydb";

interface MenuSectionProps {
  showMenu?: boolean;
  select: (title: string) => void;
}

export const NavMenuSection = ({ showMenu, select }: MenuSectionProps) => {
  return (
    <nav className="w-full bg-primary h-36 flex items-center justify-center gap-16">
      {products.map((item) => (
        <button
          onClick={() => select(item.title)}
          key={item.title}
          className=""
        >
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl">{item.icon}</div>
            <div>{item.title}</div>
          </div>
        </button>
      ))}
    </nav>
  );
};
