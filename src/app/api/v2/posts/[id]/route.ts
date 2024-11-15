import { NextRequest, NextResponse } from "next/server";
import { getAirtcleById } from "@/app/api/后端常用函数/getAirtcle";


export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = await params; 
  const AirtcleById=await getAirtcleById(id);
  return NextResponse.json(AirtcleById);
}