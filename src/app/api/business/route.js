import { NextResponse } from "next/server";
import { connectDb } from '@/utils/mongoDb';
import Business from '@/models/business';

export async function GET(request, { params }) {
    connectDb();
    const myBusiness = await Business.find();
    return NextResponse.json({ myBusiness })
}

export async function POST(request) {
    try {
        const data = await request.json();
        const newBusiness = new Business(data);
        const savedBusiness = await newBusiness.save();
        return NextResponse.json({
            savedBusiness
        })
    }catch(error){
        return NextResponse.json({
            error: "Error en el campo del negocio"
        })
    }
}