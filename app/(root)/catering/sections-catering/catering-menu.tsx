import { MenuHighlightCatering } from "@/components/ui/menu-highlight-catering";

export const CateringMenu = () => {
  return (
    <section className=" py-20 gap-10 flex flex-col">
      <h2 className="text-3xl font-extrabold text-center">
        CATERING MENU HIGHLIGHTS
      </h2>
      <div className="flex  flex-wrap w-full items-center justify-center">
        <MenuHighlightCatering />
        <MenuHighlightCatering />
        <MenuHighlightCatering />
      </div>
    </section>
  );
};
