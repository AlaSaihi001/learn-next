import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const user = await request.json();
  if (!user.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  const checkUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (checkUser) {
    return NextResponse.json({ error: "user exist" }, { status: 400 });
  }
  const newUser = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
