export const FoodSection = () => {
  return (
    <div className="h-screen flex items-center overflow-hidden bg-[#D59D97]">
      <div className="medio-circulo text-white flex justify-center items-center">
        <div className="flex flex-col max-w-xl gap-5 ">
          <h2 className="text-3xl font-bold">Choose you favorite flavor</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quaerat maxime quisquam ea aliquid id laborum ullam! Repellendus
            laboriosam cupiditate eos expedita numquam iusto impedit saepe ab,
            accusamus id delectus?
          </p>
          <div className="flex justify-start">
            <button className="bg-red-300 text-white rounded-md py-3 px-5">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
