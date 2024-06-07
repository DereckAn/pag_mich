"use server";

import { getUserByEmail } from "@/data/user";
import * as z from "zod";
import {RegisterSchema} from "@/app/schemas";
import bcrypt from "bcryptjs";
import {db} from "@/utils/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedResult = RegisterSchema.safeParse(values);
    if (!validatedResult.success) {
        console.log(validatedResult.error.errors);
        return { error: "Invalid Fields" };
    }

    const {
        email,
        password,
        name,
        birthday,
        phone,
    } = validatedResult.data;
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

    console.log(values);
    return { success: "User created successfully" };
};
