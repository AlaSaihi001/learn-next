import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    
    return NextResponse.json([
        {id:1, name:"ala"},
        {id:2, name:"jawaher"}
    ]);
}


export async function POST(request: NextRequest){
    const user = await request.json()
    if (!user.name){
        return NextResponse.json({error: "name is required"}, {status: 400});
    }
    return NextResponse.json({...user}, {status:201});
}