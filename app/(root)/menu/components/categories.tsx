import { categories } from "@/assets/constants";
import React from "react";

const Categories = () => {
  return (
    <div className="w-3/4">
      <ul className="flex items-center gap-x-1 flex-nowrap border border-black/10 p-1 rounded-full overflow-hidden overflow-x-auto scrollbar-hidden ">
        <li>
          <button
            className="py-3 px-6 bg-primary font-medium rounded-full text-vainilla"
            type="button"
          >
            All
          </button>
        </li>
        {categories.map((item) => (
          <li key={item.category}>
            <button
              className="py-3 px-6 font-medium rounded-full text-primary hover:bg-gray-500/30 transition-colors "
              type="button"
            >
              {item.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Categories);