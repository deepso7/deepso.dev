import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["iad1", "bom1"], // only execute this function on iad1
};

export default async (req: NextRequest) => {
  const data = await fetch("https://deepso.dev/api/loc");

  const response = await data.json();

  return NextResponse.json({
    response,
  });
};
