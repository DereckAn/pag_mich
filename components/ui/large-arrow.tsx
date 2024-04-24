import Large from "@/styles/order-styles.module.css";

export const LargeArow = () => {
  return (
    <div className="relative h-1 ">
      <span
        className={`bg-black absolute h-1 w-4 group-hover:left-[5px] transition-all duration-300 ease-in-out rounded-full ${Large.toparrow}`}
      />
      <span
        className={`bg-black absolute h-1 w-4  group-hover:left-[5px] transition-all duration-300 ease-in-out rounded-full ${Large.bownarrow}`}
      />
      <span
        className={`bg-black absolute h-1 w-0 group-hover:w-8 transition-all duration-300 ease-in-out rounded-full ${Large.tailarrow}`}
      />
    </div>
  );
};
