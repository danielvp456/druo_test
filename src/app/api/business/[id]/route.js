import { NextResponse } from "next/server";
import {connectDb} from '@/utils/mongoDb';
import Business from '@/models/business';

export async function GET(request, {params}){
    connectDb();
    const businessFound = await Business.findById(params.id);
    return NextResponse.json({
        businessFound
    })
}

export async function DELETE(request, {params}){
    const taskDeleted = await Business.findByIdAndDelete(params.id);
    return NextResponse.json(taskDeleted)
}

export async function PUT(request, {params}){
    const data = await request.json();
    const businessUpdated = await Business.findByIdAndUpdate(params.id, data, {new:true});
    return NextResponse.json(businessUpdated)
}