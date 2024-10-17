import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email ?? '';
        const password = credentials?.password ?? '';

        if (!email || typeof email !== 'string') {
          throw new Error('Email is invalid or missing');
        }
        if (!password || typeof password !== 'string') {
          throw new Error('Password is invalid or missing');
        }

        const user = await prisma.user.findUnique({
          where: { email: email },
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        if (!user.passwordHash) {
          throw new Error("User does not have a password set");
        }
      
        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return { id: String(user.id), email: user.email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
});
