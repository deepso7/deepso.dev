import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["bom1", "iad1"], // only execute this function on iad1
};

export default (req: NextRequest) => {
  return NextResponse.json({
    geo: req.geo,
    headers: req.headers,
    req,
  });
};
