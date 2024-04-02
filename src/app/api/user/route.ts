import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    return NextResponse.json({
        email: "aakash@mail.com",
        name: "Aakash"
    })
}

export async function  POST(req: NextRequest) {
    const body = await req.json();

    return NextResponse.json({
        body
    })
}