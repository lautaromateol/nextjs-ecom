import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";

export async function PUT(req, {params}){
    await dbConnect()
    const body = await req.json()

    try {

        // if(body.editions.some((item) => !item.stock || !item.price || !item.image)) throw new Error("Your edition is incomplete.")

        const updatedProduct = await Product.findByIdAndUpdate(
            params.id,
            { ...body },
            { new: true }
        )
        return NextResponse.json(updatedProduct, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(req, {params}){
    await dbConnect()

    try {
        const deletedProduct = await Product.findByIdAndDelete(params.id)
        return NextResponse.json(deletedProduct, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}