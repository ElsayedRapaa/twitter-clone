import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      console.log("USER ID: ", userId);
      return NextResponse.json({ message: "User Id is Messing", status: 400 });
    }

    const body = await request.json();
    const { name, username, bio, profileImage, coverImage } = body;

    if (!name || !username) {
      throw new Error("Missing fields");
    }

    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      },
    });

    return NextResponse.json({ updateUser, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, status: 400 });
  }
}
