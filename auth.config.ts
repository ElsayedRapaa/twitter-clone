import type { NextAuthConfig } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import bcreypt from "bcryptjs";
import prisma from "@/libs/db";

export default {
  providers: [
    CredentialsProviders({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Partial<Record<"email" | "password", unknown>>
      ) {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string;

        if (!email && !password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcreypt.compare(
          password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
