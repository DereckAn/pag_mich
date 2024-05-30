import { productscart } from "@/assets/dummydb";
import { CardQuantityProduct } from "./card-quantityproduct";

export const MiniCart = () => {
  const subtotal = productscart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

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
        <section className="basis-3/12 pt-2 flex flex-col justify-between gap-y-2 ">
          <ul className="space-y-1 2xl:space-y-3 ">
            <li className="flex items-center justify-between">
              <p className="text-gray-500 ">Subtotal</p>
              <h3 className="text-lg font-bold">{subtotal.toFixed(2)}</h3>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-gray-500 ">Taxes (10%)</p>
              <h3 className="text-lg font-bold">{taxes.toFixed(2)}</h3>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-gray-500 ">Total</p>
              <h3 className="text-lg font-bold">{total.toFixed(2)}</h3>
            </li>
          </ul>
          <button
            type="button"
            className="bg-primary w-full text-white py-4 rounded-full font-medium hover:tracking-widest transition-all"
          >
            Confirm Order
          </button>
        </section>
      </div>
    </aside>
  );
};
