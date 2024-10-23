/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users: ", error);
    return NextResponse.json({
      message: "Error fetching users",
      status: 500,
    });
  }
}
