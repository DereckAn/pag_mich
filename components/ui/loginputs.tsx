export const LoginInputs = () => {
  return (
    <>
      <div className="flex flex-col gap-3 p-5">
        <input
          type="text"
          placeholder="Email"
          className="rounded-full p-[16px] w-[460px] transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-full p-[16px] w-[460px] transition-colors duration-200 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
      </div>
      <button className="bg-primary text-vainilla p-4 rounded-full px-20 mt-2">
        Sign In
      </button>
    </>
  );
};
