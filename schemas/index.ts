import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string(),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  birthday: z
    .date()
    .refine(
      (value) => {
        const currentYear = new Date().getFullYear();
        const birthYear = value.getFullYear();
        const age = currentYear - birthYear;
        return age >= 1 && age <= 120;
      },
      { message: "Birthday must be a valid date representing a real person" }
    )
    .optional(),
  phone: z.string().optional(),
});
