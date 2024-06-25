import { useFormState } from "react-dom";
import { AlertFailure } from "./alert-failure";
import { AlertSuccess } from "./alert-succes";
import { register } from "@/actions/register";

const CreateInputs = () => {
  const [state, formAction] = useFormState(register, null);
  const style = "rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100";

  return (
    <>
      <AlertFailure message={state?.error} />
      <AlertSuccess message={state?.success} />
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
            placeholder="Name"
            className={style}
          />
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Email"
            className={style}
          />
        </div>
        <div className="flex gap-5 w-full">
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            placeholder="(801)-123-4567"
            className={style}
          />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className={style}
          />
        </div>

        <button
          className="bg-primary text-vainilla p-4 rounded-full px-20 mt-2 max-w-lg"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default CreateInputs;
