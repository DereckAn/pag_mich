const CreateInputs = () => {
  return (
    <form className=" flex flex-col gap-5 w-[60%] items-center">
      <div className="flex gap-5 w-full">
        <input
          type="text"
          placeholder="Name"
          className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
        <input
          type="text"
          placeholder="Lastname"
          className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
      </div>
      <div className="flex gap-5 w-full">
        <input
          type="email"
          placeholder="Email"
          className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
      </div>
      <button className="bg-primary text-vainilla p-4 rounded-full px-20 mt-2 max-w-lg">
        Sign Up
      </button>
    </form>
  );
};

export default CreateInputs;
