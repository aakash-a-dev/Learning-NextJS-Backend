import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    return NextResponse.json({
        email: "aakash@mail.com",
        name: "Aakash"
    })
}