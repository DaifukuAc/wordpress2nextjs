import { NextRequest,NextResponse } from "next/server";
import { getAllAirtcle } from "../../后端常用函数/getAirtcle";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req:NextRequest){
   const allAirtcle = await getAllAirtcle();
   return NextResponse.json(allAirtcle)
}

