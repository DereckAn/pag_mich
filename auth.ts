import { PrismaClient } from "@prisma/client"
import NextAuth, {DefaultSession} from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {LoginSchema} from "@/app/schemas";
import bcrypt from "bcryptjs";
import {getUserByEmail, getUserById} from "@/data/user";
import Credentials from "@auth/core/providers/credentials";

type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "STAFF" | "USER" ;
};
declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}
const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    callbacks: {
        async session({ session, token }) {
            console.log("token", token);
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as "ADMIN" | "STAFF" | "USER";
            }
            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;
            const user = await getUserById(token.sub);
            if (!user) return token;
            token.role = user.role;
            return token;
        },
    },
    providers: [
    Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
    Github({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
        async authorize(credentials) {
            const validateFields = LoginSchema.safeParse(credentials);
            if (validateFields.success) {
                const { email, password } = validateFields.data;
                const user = await getUserByEmail(email);
                if (!user?.password) return null;
                const isValidPassword = await bcrypt.compare(password, user.password);
                if (isValidPassword) return user;
            }
            return null;
        },
    }),
],
})