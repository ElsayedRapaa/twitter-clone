import prisma from "@/libs/db";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;

    if (!userId || typeof userId !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid user",
        })
      );
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

    return new Response(
      JSON.stringify({
        success: true,
        data: { ...user, followersCount },
      }),
      { status: 200 }
    );
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
