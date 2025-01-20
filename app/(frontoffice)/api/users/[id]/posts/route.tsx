import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts, { status: 200 });
}

export async function POST(request: NextRequest) {
  if (request.headers.get("Content-Type") !== "application/json") {
    return NextResponse.json(
      { error: "Invalid Content-Type. Expected application/json" },
      { status: 415 }
    );
  }

  const post = await request.json();

  // Validate required fields
  if (!post.contenu) {
    return NextResponse.json({ error: "contenu is required" }, { status: 400 });
  }
  if (!post.userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  // Check if user exists in the User model
  const userExists = await prisma.user.findUnique({
    where: { id: post.userId },
  });

  if (!userExists) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Create the new post
  const newPost = await prisma.post.create({
    data: {
      contenu: post.contenu,
      userId: post.userId, // Use the raw foreign key
    },
  });

  return NextResponse.json(newPost, { status: 201 });
}
