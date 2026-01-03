import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Later connect Resend or SendGrid
  console.log("New contact message:", body);

  return NextResponse.json({ success: true });
}