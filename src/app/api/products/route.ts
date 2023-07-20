import { client } from './../../../../sanity/lib/client';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        let response = await client.fetch('*[_type == "products"]')
        return NextResponse.json({response})
    } catch (error) {
        return NextResponse.json({ "Error": error })
    }
}