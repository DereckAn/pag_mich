import { productscart } from "@/assets/dummydb";
import { CardQuantityProduct } from "./card-quantityproduct";

export const MiniCart = () => {
  return (
    <aside className="fixed xl:static right-0 p-5 xl:p-0 flex flex-col h-full z-50 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-full transition-all  gap-y-8 2xl:gap-y-4 bg-red-100">
      <div className="relative basis-1/12 ">
        <i className="fi fi-rr-search absolute left-4 top-4 text-primary " />
        <input
          type="text"
          className="h-[58px] pl-12 pr-4 rounded-full outline-none  w-full "
          placeholder="Search"
        />
      </div>
      <div className="basis-11/12 overflow-y-auto flex flex-col bg-white rounded-3xl p-6 ">
        <section className="basis-1/12 ">
          <h1 className="text-2xl font-medium">Order Details</h1>
        </section>
        <ul className="basis-8/12 max-h-full overflow-y-auto scrollbar-hidden ">
          {productscart.map((product) => (
            <li key={product.name} className="border p-3 rounded-3xl mb-3">
              <CardQuantityProduct product={product} />
            </li>
          ))}
        </ul>
        <section className="basis-3/12 ">totales</section>
      </div>
    </aside>
  );
};
