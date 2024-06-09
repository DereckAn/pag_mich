"use server";

import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/schemas";
import { db } from "@/utils/db";
import bcrypt from "bcryptjs";

export const register = async (state: any, formData: FormData) => {
  const validatedResult = RegisterSchema.safeParse({
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    name: formData.get("name")?.toString(),
    birthday: formData.get("birthday")?.toString(),
    phone: formData.get("phone")?.toString(),
  });

  console.log(validatedResult);
  
  if (!validatedResult.success) {
    console.log(validatedResult.error.errors);
    return { error: "Invalid Fields" };
  }

  const { email, password, name, birthday, phone } = validatedResult.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      birthday,
      phone,
    },
  });

  //todo: Send verification token email.

  console.log(validatedResult);
  console.log(formData);
  console.log("este es el state ----> ", state);

  return { success: "User created successfully" };
};
