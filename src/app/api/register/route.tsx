/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest } from "next/server";
import prisma from "@/libs/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { email, name, username, password } = await request.json();

    if (!email && !name && !username && !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email is already exist",
        }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        hashedPassword,
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "User registered successfully.",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user: ", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error registering user",
      }),
      {
        status: 500,
      }
    );
  }
}
