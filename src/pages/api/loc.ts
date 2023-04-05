import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["bom1", "iad1"], // only execute this function on iad1
};

export default async (req: NextRequest) => {
  // const data = await fetch("https://deepso.dev/api/loc");

  // const response = await data.json();

  return NextResponse.json({
    geo: req.geo,
  });
};
