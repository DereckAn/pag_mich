"use client";

import { login } from "@/actions/login";
import { useFormState } from "react-dom";
import { AlertFailure } from "./alert-failure";
import { AlertSuccess } from "./alert-succes";

export const LoginInputs = () => {
  const [state, formAction] = useFormState(login, null);

  return (
    <>
      <AlertSuccess message={state?.success} />
      <AlertFailure message={state?.error} />
      <form
        className="flex flex-col gap-3 p-5"
        action={formAction}
        method="POST"
      >
        <input
          placeholder="Email"
          name="email"
          id="email"
          type="email"
          required
          className="rounded-full p-[16px] w-[460px] transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
          className="rounded-full p-[16px] w-[460px] transition-colors duration-200 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
        />
        <button
          className="bg-primary text-vainilla p-4 rounded-full px-20 mt-2"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </>
  );
};
