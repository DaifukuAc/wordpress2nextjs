import { NextRequest,NextResponse } from "next/server";
import { getAllAirtcle } from "../../后端常用函数/getAirtcle";


export async function GET(req:NextRequest){
   const allAirtcle = await getAllAirtcle();
   return NextResponse.json(allAirtcle)
}

