import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();
export async function GET(req: NextRequest) {

   
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
       return NextResponse.json({
            message: "Error while signup"
        }, {
            status: 411
        })
    }


    
   
}