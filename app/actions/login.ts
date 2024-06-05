"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import * as z from "zod";
import {LoginSchema} from "@/app/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedResult = LoginSchema.safeParse(values);
    if (!validatedResult.success) {
        return { error: "Invalid Fields" };
    }
    console.log(values);

    const { email, password } = validatedResult.data;
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
