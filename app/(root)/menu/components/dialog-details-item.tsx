import { Products } from "@/types";
import Image from "next/image";

interface DialogDetailsItemProps {
  activeCard: Products;
  closeDialog: () => void;
}
export const DialogDetailsItem = ({
  activeCard,
  closeDialog,
}: DialogDetailsItemProps) => {
  return (
    <div
      onClick={closeDialog}
      className="w-full h-full bg-black/60 z-50 fixed inset-0"
    >
      <dialog
        onClick={(e) => e.stopPropagation()}
        className="bg-vainilla w-[80vw] md:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] h-[90dvh] fixed inset-0 flex flex-col items-center justify-center z-50 m-auto  rounded-3xl transition-all duration-500 ease-in-out"
      >
        <p>Greetings, one and all!</p>
        <Image
          src={activeCard?.image}
          alt={activeCard?.name as string}
          className="w-1/2 h-1/2"
        />
        <button onClick={closeDialog} className="z-50">
          Close
        </button>
      </dialog>
    </div>
  );
};
