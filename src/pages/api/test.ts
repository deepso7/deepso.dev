import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async (req: NextRequest) => {
  const data = await fetch("https://deepso.dev/api/loc");

  const response = await data.json();

  return NextResponse.json({
    response,
  });
};
