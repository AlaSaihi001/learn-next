import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: Promise<{
    id: number;
  }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;

  return NextResponse.json({ id, name: "ala" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await request.json();
  if (!user.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  return NextResponse.json({ id, name: "ala" });
}


export async function DELETE(request: NextRequest, { params }: Props) {
    const { id } = await params;
  
    return NextResponse.json({});
  }