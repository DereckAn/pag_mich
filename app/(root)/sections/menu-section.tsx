import { menuSection } from "@/assets/constants";

export const MenuSection = () => {
  return (
    <section className="w-full bg-primary h-80 flex items-center justify-center ">
      <div className="sm:flex items-center gap-10 hidden ">
        {menuSection.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-5xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
