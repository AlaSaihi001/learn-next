import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        error: "user not found!",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await request.json();
  if (!user.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  const checkUser = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!checkUser) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: user.name,
      email: user.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const checkUser = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!checkUser) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const deletedUser = await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });

  return new NextResponse(null, { status: 204 });
}
