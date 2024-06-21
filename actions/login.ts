"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { generateVerificationToken } from "@/utils/tokens";
import { AuthError } from "next-auth";

export const login = async (state: any, formData: FormData) => {
  const validatedResult = LoginSchema.safeParse({
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  });

  if (!validatedResult.success) {
    console.log(validatedResult.error);
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedResult.data;
  const exisitingUser = await getUserByEmail(email);

  if (!exisitingUser?.email || !exisitingUser.password) {
    return { error: "Email does not exist or Invalid Credentials " };
  }

  if (!exisitingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      exisitingUser.email
    );
    return { success: "Please verify your email" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Login successful" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "An error occurred" };
      }
    }
    throw error;
  }
};
