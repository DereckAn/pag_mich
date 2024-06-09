import { register } from "@/app/actions/register";
import { useFormState } from "react-dom";
import { AlertFailure } from "./alert-failure";
import { AlertSuccess } from "./alert-succes";

const CreateInputs = () => {
  const [state, formAction] = useFormState(register, null);

  return (
    <>
      <AlertSuccess message={state?.success} />
      <AlertFailure message={state?.error} />
      <form
        className=" flex flex-col gap-5 w-[60%] items-center"
        action={formAction}
        method="POST"
      >
        <div className="flex gap-5 w-full">
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            // disabled={isPending}
            placeholder="Name"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            // disabled={isPending}
            placeholder="Email"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
        </div>
        <div className="flex gap-5 w-full">
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            // disabled={isPending}
            placeholder="(801)-123-4567"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            // disabled={isPending}
            placeholder="Password"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
        </div>

        <button
          className="bg-primary text-vainilla p-4 rounded-full px-20 mt-2 max-w-lg"
          type="submit"
          // disabled={isPending}
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default CreateInputs;
