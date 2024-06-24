import { Products } from "@/types";
import Image from "next/image";
import { ButtonToppings } from "./button-toppings";
import { SectionDialogItem } from "./section-dialog-item";
interface DialogDetailsItemProps {
  activeCard: Products;
  closeDialog: () => void;
}
export const DialogDetailsItem = ({
  activeCard,
  closeDialog,
}: DialogDetailsItemProps) => {
  const quantity = 1;
  return (
    <div
      onClick={closeDialog}
      className="w-full h-full bg-black/60 z-50 fixed inset-0"
    >
      <dialog
        onClick={(e) => e.stopPropagation()}
        className="bg-vainilla w-[80vw] md:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] h-[92dvh] fixed inset-0 flex flex-col z-50 m-auto  rounded-3xl transition-all duration-500 ease-in-out"
      >
        <button onClick={closeDialog} className="z-50 absolute right-5 top-5">
          <i className="fi fi-br-cross text-xl" />
        </button>
        <div className="flex-1 overflow-y-auto">
          <section>
            <div className=" w-full p-5 flex flex-row gap-5">
              <Image
                src={activeCard?.image}
                alt={activeCard?.name}
                className="rounded-2xl"
                width={300}
                height={300}
              />
              <div className=" py-5">
                <h1 className="text-4xl font-bold">{activeCard?.name}</h1>
                <p>{activeCard?.description}</p>
                <p className="text-2xl font-bold">${activeCard?.price}</p>
                <p>Nutrition Infromation</p>
              </div>
            </div>
            <hr className=" border-primary " />
          </section>
          <SectionDialogItem title="Meal">
            <ButtonToppings image={activeCard?.image} text="Make It a Combo" />
          </SectionDialogItem>
          <SectionDialogItem title="Toppings">
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
          </SectionDialogItem>
          <SectionDialogItem title="Bun">
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
            <ButtonToppings image={activeCard?.image} text="Make " />
          </SectionDialogItem>
          <SectionDialogItem title="Adds/Extras">
            <ButtonToppings
              image={activeCard?.image}
              text="Protein"
              ima={false}
              className="flex-1"
            />
            <ButtonToppings
              image={activeCard?.image}
              text="Bobba"
              ima={false}
              className="flex-1"
            />
            <ButtonToppings
              image={activeCard?.image}
              text="Fruit"
              ima={false}
              className="flex-1"
            />
          </SectionDialogItem>
        </div>
        <div
          className={`relative p-5  bottom-0 left-0 right-0 space-y-2 shadow-2xl shadow-black`}
        >
          <div className="flex items-center justify-end gap-3">
            Hungry??
            <button
              type="button"
              className="w-8 h-8 bg-primary hover:bg-amarillo transition-all duration-300 ease-in-out hover:text-primary hover:font-bold rounded-full flex items-center justify-center "
            >
              <i className="fi fi-rr-minus text-white " />
            </button>
            {quantity}
            <button
              type="button"
              className="w-8 h-8 bg-primary hover:bg-amarillo transition-all duration-300 ease-in-out hover:text-primary hover:font-bold rounded-full flex items-center justify-center "
            >
              <i className="fi fi-rr-plus text-white " />
            </button>
          </div>
          <button className="bg-primary py-4 px-8 text-vainilla rounded-full w-full">
            Add To Cart
          </button>
        </div>
      </dialog>
    </div>
  );
};
