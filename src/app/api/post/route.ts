import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ message: "User Id is Messing", status: 400 });
    }

    const theBody = await request.json();
    const { body } = theBody;

    const post = await prisma.post.create({
      data: {
        body,
        userId: userId,
      },
    });

    return NextResponse.json({ post, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, status: 400 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    let posts;

    if (userId) {
      posts = await prisma.post.findMany({
        where: {
          userId,
        },
        include: {
          user: true,
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      posts = await prisma.post.findMany({
        include: {
          user: true,
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return NextResponse.json({ posts, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, status: 400 });
  }
}
