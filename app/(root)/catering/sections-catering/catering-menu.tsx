import { MenuHighlightCatering } from "@/components/ui/menu-highlight-catering";

export const CateringMenu = () => {
  return (
    <section>
      <h2 className="text-3xl py-6 font-extrabold text-center">
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
