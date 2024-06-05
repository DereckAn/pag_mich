import { register } from "@/app/actions/register";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { AlertFailure } from "./alert-failure";
import { AlertSuccess } from "./alert-succes";

const CreateInputs = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    birthday: undefined,
    phone: "",
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setError("");
    setSuccess("");
    startTransition(() => {
      register(formData).then((result) => {
        setError(result.error ?? "");
        setSuccess(result.success ?? "");
      });
    });
  };

  return (
    <>
      <AlertSuccess message={success} />
      <AlertFailure message={error} />
      <form
        className=" flex flex-col gap-5 w-[60%] items-center"
        onSubmit={handleSubmit}
        action="#"
        method="POST"
      >
        <div className="flex gap-5 w-full">
          <input
            type="text"
            id="name"
            autoComplete="name"
            required
            disabled={isPending}
            onChange={handleChange}
            placeholder="Name"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
          <input
            type="email"
            id="email"
            autoComplete="email"
            required
            disabled={isPending}
            onChange={handleChange}
            placeholder="Email"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
        </div>
        <div className="flex gap-5 w-full">
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            required
            disabled={isPending}
            onChange={handleChange}
            placeholder="(801)-123-4567"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            required
            disabled={isPending}
            onChange={handleChange}
            placeholder="Password"
            className="rounded-full p-4 w-full transition-colors duration-300 ease-in-out focus:bg-vainilla focus:border-none focus:outline-none focus:ring-2 focus:ring-primary text-primary border-orange-100"
          />
        </div>

        <button
          className="bg-primary text-vainilla p-4 rounded-full px-20 mt-2 max-w-lg"
          type="submit"
          disabled={isPending}
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default CreateInputs;
