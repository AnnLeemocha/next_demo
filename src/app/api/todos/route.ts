import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ message: "Hello TODO LIST from API Route" });
}