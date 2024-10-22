/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/libs/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: users,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching users: ", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error fetching users: ",
      }),
      { status: 500 }
    );
  }
}
