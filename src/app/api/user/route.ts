import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();
export function GET(req: NextRequest) {
    return NextResponse.json({
        email: "aakash@mail.com",
        name: "Aakash"
    })
}
// 


export async function  POST(req: NextRequest) {
    const body = await req.json();

    try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
            
        });
         return NextResponse.json({
        body
    })
    } catch (error) {
        NextResponse.json({
            message: "Error while sign up"
        }, {
            status: 411
        })
    }


    
   
}