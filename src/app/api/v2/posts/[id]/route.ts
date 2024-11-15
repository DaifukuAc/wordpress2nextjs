import { NextRequest, NextResponse } from "next/server";
import { getAirtcleById } from "@/app/api/后端常用函数/getAirtcle";

interface Params{
  id:string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest, { params }: { params:Promise<Params> }) {
    
  const { id } = await params; 
  const AirtcleById=await getAirtcleById(id);
  return NextResponse.json(AirtcleById);
}