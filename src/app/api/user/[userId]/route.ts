import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;

    if (!userId) {
      return NextResponse.json({
        message: "Invalid user",
        status: 404,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User not found",
        }),
        { status: 404 }
      );
    }

    return NextResponse.json({ ...user, followersCount });
  } catch (error) {
    console.error("Error fetching user: ", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error fetching user",
      }),
      { status: 500 }
    );
  }
}
